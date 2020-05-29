// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    // 存储输入框的值
    inputValue: '',
    records: [
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      },
      {
        task:'任务二',
        device:'设备二'
      },
      {
        task:'任务一',
        device:'设备一'
      }
    ],
  },

  timeId: -1,

  // 通过该函数可以获取到组件的各种参数值
  inputChange: function (e) {
    const value = e.detail.value.trim();
    console.log("输入框值:" + value);

    // 判断输入数据的有效性
    if (value) {
      this.setData({
        inputValue: value
      });

      // 动态修改导航栏的标题
      // wx.setNavigationBarTitle(
      //   {
      //     title: this.data.inputValue
      //   }
      // );

      console.log("输入结束时间:" + Date.now());
      clearInterval(this.timeId);
      // 设置定时器
      this.timeId = setTimeout(() => {
        console.log("真正请求时间:" +Date.now());
      }, 1000);
    }
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