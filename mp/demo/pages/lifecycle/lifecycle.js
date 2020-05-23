// pages/lifecycle/lifecycle.js
/**
 * 页面的生命周期->在应用的生命周期调用后才进行调用
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s:"zhaokun",
  },

  // 定义了全局的数据,与上面的data变量数据一致,区别在于上面的data数据可以被.wxml文件使用,而这些只能在本文件中使用
  tm: [],
  stm: "zhaokun",

  /**
   * 生命周期函数--监听页面加载
   * 应用场景:一般在该处发送异步请求来初始化页面数据
   */
  onLoad: function (options) {

    console.log("lifecycle:onLoad");
    // 测试1:内存中data的数据
    console.log("s = " + this.data.s);
    this.setData(
      {s:"00"}
    );

    // 测试2:测试缓存数据,如果缓存数据了,即使重新调用onLoad函数,数据还会存在,该数据是存储在磁盘中
    const cache = wx.getStorageSync('cache');

    if(cache)
    {
      console.log("lifecycle:缓存里面有数据");
    }
    else {
      console.log("lifecycle:缓存里面没有数据");
      wx.setStorage({
        data: 'zhaokun',
        key: 'cache',
      })
    }
  },

   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("lifecycle:onShow");
    console.log("s = " + this.data.s);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("lifecycle:onReady");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("lifecycle:onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("lifecycle:onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("lifecycle:onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("lifecycle:onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("lifecycle:onShareAppMessage");
  }
})