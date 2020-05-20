// pages/eventbind/eventbind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /*
    输入框的绑定事件:当输入框内容发生变化时会回调该函数
  */
  handInput: function(e) {
    // 通过观察console打印的json数据,可以查看各项数据
    console.log(e);
    //打印输入框里面的内容
    console.log("输入的数据:"+e.detail.value);
    //打印输入框的私有数据
    console.log("组件id:" + e.target.dataset.id);
  },

  handleClick: function(e) {
    console.log("按钮点击了");
    console.log(e);
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