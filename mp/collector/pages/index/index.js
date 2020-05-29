const globalData = require('../../global/data.js');
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    // 右侧栏数据
    rightList: [
      {
      taskId: 1,
      taskName: '任务一',
      devices: [{
          deviceId: 1,
          deivceName: "设备1",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_001.jpg"
        },
        {
          deviceId: 2,
          deivceName: "设备2",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_002.jpg"
        },
        {
          deviceId: 3,
          deivceName: "设备3",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_003.jpg"
        },
        {
          deviceId: 4,
          deivceName: "设备4",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_004.jpg"
        },
      ]
    },
    {
      taskId: 2,
      taskName: '任务二',
      devices: [{
          deviceId: 1,
          deivceName: "设备1",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_004.jpg"
        },
        {
          deviceId: 2,
          deivceName: "设备2",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_005.jpg"
        }
      ]
    },
    {
      taskId: 3,
      taskName: '任务三',
      devices: [{
          deviceId: 1,
          deivceName: "设备5",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_001.jpg"
        },
        {
          deviceId: 2,
          deivceName: "设备4",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_004.jpg"
        },
        {
          deviceId: 3,
          deivceName: "设备1",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_002.jpg"
        }
      ]
    },
    {
      taskId: 4,
      taskName: '任务四',
      devices: [{
          deviceId: 1,
          deivceName: "设备5",
          pics_big: '',
          pics_mid: '',
          pics_sma: "../../icons/device_003.jpg"
        }
      ]
    },
  ],
    //选中的左侧序号
    tapIndex: 0,
    // 设置每次点击左边选项时,右边内容位置都是从开始进行
    scrollTop: 0,
  },

  //总数据
  Cate: [],

  handelTap: function (e) {
    console.log(e);
    // 获取传递过来的索引值
    const tapIndex = e.currentTarget.dataset.index;
    // 根据索引值,修改右侧项的内容
    const rightList = this.Cate[tapIndex].children;
    this.setData({
      // 设置选中的标签的索引值
      tapIndex,
      // 设置右侧项内容
      rightList,

      scrollTop: 0
    });
  },

  getTaskList: function () {

  },
  
  // 获取 分类导航数据
  getCateList: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    return;
    console.log("onLoad");
    // 在小程序中使用缓存技术,可以在调试器的Storage区域看到缓存的数据
    /*
    wx.setStorageSync('name', 'zhaokun');
    const name = wx.getStorageSync('name');
    console.log("name:" + name);

    const age = wx.getStorageSync('age');
    console.log("age:" + age);
    if(age) {
      console.log("存储了age的值");
    }
    else {
      console.log("没有存储age的值");
    }
    */

    //当重新编译时,会重新加载onload方法
    /*
      该次请求时,数据量很多,不能每次都要进行去请求,因此使用缓存技术
      小程序的使用缓存的操作步骤:
      (1)先判断本地有没有旧的数据,数据存储的格式
      {time:Date.now(),data:[]}
      2.没有旧数据,直接发送请求
      3.有旧的数据,如果旧的数据没有过期，就使用本地缓存,否则请求数据
    */
    const Cates = wx.getStorageSync('cates')
    if (Cates) { //缓存中有数据
      console.log("当前时间:" + Date.now());
      console.log("缓存时间:" + Cates.time);

      if (Date.now() - Cates.time > 1000 * 5) {
        console.log("缓存中数据过期");
        this.getCateList();
      } else {
        console.log("缓存中数据没有过期");
        this.Cate = Cates.data;
        let leftList = this.Cate.map(v => v.cat_name);
        let rightList = this.Cate[0].children;

        this.setData({
          // 第一种赋值形式
          // leftList:leftList,
          // 第二种赋值形式 
          leftList,
          rightList,
        });
      }
    } else //缓存中没有数据
    {
      console.log("缓存中没有数据");
      this.getCateList();
    }
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
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("333333333333333333");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})