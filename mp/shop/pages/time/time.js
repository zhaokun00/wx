// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-01-01',//默认起始时间  
    date2: '2018-01-24',//默认结束时间 

  },

  // 时间段选择  
  bindDateChange(e) {
    let that = this;
    console.log(e.detail.value)
    that.setData({
      date: e.detail.value,
    })

    // https://blog.csdn.net/lm1022/article/details/80109706 //小程序时间选择器
    // https://blog.csdn.net/shang_GQ/article/details/90300308 //时间戳转换
    // http://www.manongjc.com/article/36025.html
    var repTime = '2019-05-20';
    var timeTamp = Date.parse(repTime);
    console.log(timeTamp);
  },
  bindDateChange2(e) {
    let that = this;
    that.setData({
      date2: e.detail.value,
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