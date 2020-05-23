//index.js
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 定义数组类型-轮播数据
    swiperList:[],
    // 定义数组类型-导航数据
    catesList: [],
    // 楼层数据
    floorList: [],
  },

  getSwiperList: function() {
    request({url:'/home/swiperdata'}).then(
      // 箭头函数,主要是匿名函数,result是传入参数
      result => {
        console.log(result);
        this.setData(
          {
            // 获取数据返回的数组数据进行赋值
            swiperList:result.data.message
          }
        );
      }
    ).catch( //异常回调的函数
      err => {
        console.log(err);
      }
    );
  },

  getCatesList: function() {
    request({url:'/home/catitems'}).then(
      result => {
        console.log(result);
        this.setData(
          {
            catesList:result.data.message
          }
        );
      }
    );
  },

  getfloorList: function() {
    request({url:'/home/floordata'}).then(
      result => {
        console.log(result);
        this.setData(
          {
            floorList:result.data.message
          }
        );
      }
    );
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("index onLoad");
    this.getSwiperList();
    this.getCatesList();
    this.getfloorList();
    /*
      箭头函数格式:
      函数名:(传入参数) => {
        函数体
      }
    */
    //小程序中原始发送https请求方式
/*     wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      dataType: 'json',
      method: 'Get',      
      // 请求成功的回调函数
      success: (result) => {
        console.log('success');
        // 会在真正的数据基础上再次进行封装
        console.log(result);
        // 使用方法setData对数据进行赋值操作,可以查看调试窗口的AppData来查看存储的数据
       this.setData(
        {
          // 获取数据返回的数组数据进行赋值
          swiperList:result.data.message
        }
       );
      console.log(this.data.swiperList);
      },
      // 请求失败的回调函数
      fail: (res) => {
        console.log('fail');
        console.log(res);
      },
      // 请求无论是否成功,都会回调该函数
      complete: (res) => {
        console.log('complete');
        console.log(res);
      },
    }); */
    
/*     request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}).then(
      // 箭头函数,主要是匿名函数,result是传入参数
      result => {
        console.log(result);
      }
    ).catch(
      result => {
        console.log(result);
      }
    ).finally(
      result => {
        console.log("finally");
      }
    ); */
  },

   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("index onShow");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("index onReady");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
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