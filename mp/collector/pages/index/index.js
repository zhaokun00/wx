const globalData = require('../../global/data.js');
const util = require('../../utils/util.js');

Page({

  // 任务请求参数
  taskParams: {
    // 第几页
    pageNum: 1,
    // 每页第几页
    pageSize: 20
  },

  /**
   * 页面的初始数据
   */
  data: {

    // 任务列表
    taskList: [],

  },

  maxPageNum: 1,
  isRequestDuring: false,

  getTaskList: function () {
    if (this.isRequestDuring == false) {
      this.isRequestDuring = true;
      const data = JSON.stringify(this.taskParams);
      console.log(data);

      util.httpRequest({
        url: globalData.urlList.taskUrl,
        data: data,
        header: {
          userName: globalData.storeList.userName
          // userName: 'admin'
        },
        timeout: 3000,
      }).then(
        result => {
          if (result.code == globalData.codeList.success) {
            const data = result.data;
            data.tasks = this.data.taskList.concat(data.tasks); //数组进行拼接
            // console.log(data);
            this.maxPageNum = Math.ceil(data.total / this.taskParams.pageSize);
            this.setData({
              taskList: result.data.tasks
            });
          } else {
            wx.showToast({
              title: result.message,
              icon: 'none',
            });
          }

          this.isRequestDuring = false;
        }
      ).catch(
        err => {
          this.isRequestDuring = false;
          console.log(err);
          wx.showToast({
            title: globalData.tipList.netFailed,
            icon: 'none',
          });
        }
      );
    }
    else {
      console.log("任务页面正在请求中...");
    }

    // 当请求完数据,停止下拉刷新
    wx.stopPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTaskList();
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
    console.log('任务列表,监听数据下拉动作...');
    this.taskParams.pageNum = 1;
    this.data.taskList = [];
    this.getTaskList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");

    if (this.taskParams.pageNum >= this.maxPageNum) {
      wx.showToast({
        title: '已经没有数据啦',
        icon: 'none',
      });
    } else {
      this.taskParams.pageNum++;
      this.getTaskList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})