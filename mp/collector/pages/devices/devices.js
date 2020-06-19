const globalData = require('../../global/data.js');
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    scrollTop: 0,
    //Tabs数据,定义父控件向子控件传递的数据,数据类型为数组类型
    tabs: [{
      id: 0,
      name: '实时数据',
      isActive: true
    }, {
      id: 1,
      name: '历史数据',
      isActive: false
    }],

    //设备实时列表
    deviceRealTimeData: {
      // time: '',
      // attributes: []
    },

    //设备历史列表
    deviceHistoryData: {
      historyData:[],
      // pageTotal: 0,
      // historyData:[
      //   {
      //     time: '',
      //     attributes:[
      //     ]
      //   }
      // ]
    },

    startTime: 0,
    endTime: 0,

    startShowTime: '',
    endShowTime: '',
  },

  /**
   * 0: 实时数据
   * 1: 历史数据
   */
  index:0,
  // 实时数据请求参数
  realTimeParamsReq: {
    taskNum: '',
    deviceNum: '',
  },

  // 请求历史数据参数
  historyParamsReq: {
    taskNum: '',
    deviceNum: '',
    startTime: 0,
    endTime: 0,
    pageSize: 48,
    pageNum: 1,
  },

  maxPageNum: 1,

  initHistoryData: function (e) {
    this.historyParamsReq.pageNum = 1;
    const data = {historyData:[]};

    this.setData({
      deviceHistoryData: data
    });
  },

  tabsItemChange: function (e) {
    console.log(e);

    this.index = e.detail.id;
    const tabs = this.data.tabs;

    tabs.forEach(
      (v, i) => i === this.index ? v.isActive = true : v.isActive = false
    )

    this.setData({
      tabs
    });

    if(this.index == 0) {
      this.getDeviceRealTimeData();
    }
    else {
      this.initHistoryData();
      this.getDeviceHistoryData();
    }
  },

  bindStartDateChange: function(e) {
    console.log(e);

    const date = new Date(e.detail.value);
    let setStartTime = Date.parse(date.toLocaleDateString() + " 00:00:00") / 1000;

    this.setData(
      {
        // startShowTime: date.toLocaleDateString(),
        startShowTime: util.formatTime3(date),
        startTime: setStartTime,
      }
    );

    if(setStartTime >= this.data.endTime) { //判断如果开始时间,重新设置结束时间
      this.setData(
        {
          endShowTime: util.formatTime3(date),
          endTime: setStartTime + 24*60*60,
        }
      );
    }

    this.initHistoryData();
    this.getDeviceHistoryData();
  },

  bindEndDateChange: function(e) {

    const date = new Date(e.detail.value);
    let setTime = Date.parse(date.toLocaleDateString() + " 00:00:00") / 1000;

    if(setTime < this.data.startTime) {
      wx.showToast({
        title: globalData.tipList.historyTime,
        icon: 'none',
      });
      return;
    }

    let tomorrow = setTime + 24*60*60;

    this.setData(
      {
        // endShowTime: date.toLocaleDateString(),
        endShowTime: util.formatTime3(date),
        endTime: tomorrow,
      }
    );

      this.initHistoryData();
      this.getDeviceHistoryData();
  },

  getDeviceRealTimeData: function() {
    const data = JSON.stringify(this.realTimeParamsReq);

    util.httpRequest({
      url: globalData.urlList.deviceRealTimeUrl,
      data: data,
      header: {
        // userName: globalData.storeList.userName
        userName: 'admin'
      },
      timeout: 3000,
    }).then(
      result => {
        if (result.code == globalData.codeList.success) {
          console.log(result);
          var data = result.data;
          data.attributes.forEach(
            (v, i) => v.attributeValue === null ? v.attributeValue="---" : v.attributeValue=v.attributeValue
          )
          // 用于测试
          // const data = globalData.deviceRealTimeDataS;
          this.setData(
            {deviceRealTimeData:data}
          );
        } else {
          const data = {time:util.formatTime2(new Date())};
          
          // 获取数据失败时,显示当前时间
          this.setData(
            {deviceRealTimeData:data}
          );

          wx.showToast({
            title: result.message,
            icon: 'none',
          });
        }

         // 当请求完数据,停止下拉刷新
         wx.stopPullDownRefresh();
      }
    ).catch(
      err => {
        console.log(err);
        wx.showToast({
          title: globalData.tipList.netFailed,
          icon: 'none',
        })
      }
    );
},

isRequestHistroyDuring: false,

getDeviceHistoryData: function() {

  if(this.isRequestHistroyDuring == false) {
    this.isRequestHistroyDuring = true;
    this.historyParamsReq.startTime = this.data.startTime;
    this.historyParamsReq.endTime = this.data.endTime;
  
    const data = JSON.stringify(this.historyParamsReq);
    console.log(data);
  
    util.httpRequest({
      url: globalData.urlList.deviceHistoryUrl,
      data: data,
      header: {
        userName: globalData.storeList.userName
        // userName: 'admin'
      },
      timeout: 3000,
    }).then(
      result => {
        if (result.code == globalData.codeList.success) {
          console.log(result);
          const data = result.data;

          data.historyData = this.data.deviceHistoryData.historyData.concat(data.historyData); //数组进行拼接
          
          if(data.historyData.length > 0) {
            this.maxPageNum = Math.ceil(data.pageTotal / this.historyParamsReq.pageSize);
  
            this.setData(
              {deviceHistoryData:data}
            );
    
            //存储历史数据
            // const cacheKey = this.historyParamsReq.taskNum + "_" + this.historyParamsReq.deviceNum + "_" + 'cacheData';
            // wx.setStorageSync(cacheKey, {startShowTime: this.data.startShowTime,endShowTime: this.data.endShowTime,startTime: this.data.startTime,endTime: this.data.endTime,deviceHistoryData: this.data.deviceHistoryData});
          }
          else{
            //判断如果数据为空
            if(this.data.deviceHistoryData.historyData.length == 0) {
              console.log('ggggggggggggggggggggggggggg');
              wx.showToast({
                title: globalData.tipList.historyEmpty,
                icon: 'none',
              });
            }
          }
        } else {
          wx.showToast({
            title: result.message,
            icon: 'none',
          });
        }
  
         // 当请求完数据,停止下拉刷新
         wx.stopPullDownRefresh();
         this.isRequestHistroyDuring = false;
      }
    ).catch(
      err => {
        this.isRequestHistroyDuring = false;
        console.log(err);
        wx.showToast({
          title: globalData.tipList.netFailed,
          icon: 'none',
        })
      }
    );
  }
  else {
    console.log("设备页面正在请求中...");
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    // 设置显示设备的名称
    wx.setNavigationBarTitle({
      title: options.deivceName,
    })

    // 设置实时数据请求参数
    this.realTimeParamsReq.taskNum = options.taskNum;
    this.realTimeParamsReq.deviceNum = options.deviceNum;

    // 设置历史数据请求参数
    this.historyParamsReq.taskNum = options.taskNum;
    this.historyParamsReq.deviceNum = options.deviceNum;

    this.getDeviceRealTimeData();

    /*
    const cacheKey = this.historyParamsReq.taskNum + "_" + this.historyParamsReq.deviceNum + "_" + 'cacheData';
    const cacheData = wx.getStorageSync(cacheKey);

    if(cacheData) { //有缓存数据
      console.log(cacheKey + "存在缓存数据");
      this.setData(
        {
          startShowTime: cacheData.startShowTime,
          endShowTime: cacheData.endShowTime,
          startTime: cacheData.startTime,
          endTime: cacheData.endTime,
          deviceHistoryData: cacheData.deviceHistoryData
        }
      );
    }
    else { //没有缓存数据
      console.log(cacheKey + "不存在缓存数据");
      const date = new Date();
      this.setData(
        {
          startShowTime: date.toLocaleDateString(),
          endShowTime: date.toLocaleDateString(),
          startTime: Date.parse(new Date(date.toLocaleDateString())) / 1000,
          endTime: Date.parse(new Date()) / 1000
        }
      );
    }
    */

   const date = new Date();
   this.setData(
     {
      //  startShowTime: date.toLocaleDateString(),
      //  endShowTime: date.toLocaleDateString(),
       startShowTime: util.formatTime3(date),
       endShowTime: util.formatTime3(date),
       startTime: Date.parse(new Date(date.toLocaleDateString())) / 1000,
      //  endTime: Date.parse(new Date()) / 1000
      endTime: Date.parse(date.toLocaleDateString() + " 00:00:00") / 1000 + 24*60*60
     }
   );
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
    if(this.index == 0) {
      console.log('实时数据,监听数据下拉动作...');
      this.getDeviceRealTimeData();
    }
    else {
      console.log('历史数据,监听数据下拉动作...');
      this.initHistoryData();
      /*
      const cacheKey = this.historyParamsReq.taskNum + "_" + this.historyParamsReq.deviceNum + "_" + 'cacheData';
      const cacheData = wx.getStorageSync(cacheKey);
      if(cacheData) {
        wx.clearStorageSync();
      }
      */
      this.getDeviceHistoryData();
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    if(this.index == 1) {
      if(this.historyParamsReq.pageNum >= this.maxPageNum) {
        wx.showToast({
          title: '已经没有数据啦',
          icon: 'none',
        });
      }
      else {
        this.historyParamsReq.pageNum++;
        this.getDeviceHistoryData();
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})