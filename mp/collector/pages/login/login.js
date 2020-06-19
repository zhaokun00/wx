// 导入全局变量
const globalData = require('../../global/data.js');
const util = require('../../utils/util.js');

Page({

  data: {

  },

  // 定义用户信息
  userInfo: {
    userName: '',
    password: ''
  },

  accountInput: function (e) {
    console.log("fffffffffffffffffffff");
    const username = e.detail.value;

    this.userInfo.userName = username;
/*
    if (username != "") {
      this.userInfo.userName = username;
    }
*/
    /*
        //变量定义在data数据中
        if (username != "") {
          this.data.userInfo.userName = username;
          this.setData({
            userInfo:this.data.userInfo
          });
        }
    */

  },

  passwordBlur: function (e) {

    const password = e.detail.value;

    this.userInfo.password = password;
/*
    if (password != "") {
      this.userInfo.password = password;
    }
*/
  },

  login: function (e) {

    const data = JSON.stringify(this.userInfo);

    if (this.userInfo.userName == "" || this.userInfo.password == "") {
      wx.showToast({
        title: globalData.tipList.accountError,
        icon: 'none',
      });

      return;
    }

    util.httpRequest({
      url: globalData.urlList.loginUrl,
      data: data,
      header: {
        userName: this.userInfo.userName
      },
      timeout: 3000,
    }).then(
      result => {
        console.log(result.code);
        
        if (result.code == globalData.codeList.success) {
          globalData.storeList.userName = this.userInfo.userName;
          wx.redirectTo({
            url: '/pages/index/index',
          });
        } else {
          wx.showToast({
            title: globalData.tipList.loginFailed,
            icon: 'none',
          });
        }
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

  knowledge: function() {
    wx.showToast({
      title: globalData.tipList.knowledge,
      icon: 'none',
      duration: 3000,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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