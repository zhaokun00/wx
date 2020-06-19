// 导入全局变量
const globalData = require('../../global/data.js');
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    showClearFlag: false,
    records: [
    ],
  },
// 定义一个定时器
  timeId: -1,
// 定义查询数据
  searchDataReq: {
    param: ''
  },

  searchList: function (e) {

    this.searchDataReq.param = this.data.inputValue;
    const data = JSON.stringify(this.searchDataReq);
    console.log(data);

    util.httpRequest({
      url: globalData.urlList.searchUrl,
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

          this.setData(
            {records: data}
          );
        } else {
          
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    );

  },

  getfocus: function (e) {

  },

  clearInput: function (e) {

    this.setData({
      inputValue: '',
      showClearFlag: false,
      records:[]
      })
  },

  // 通过该函数可以获取到组件的各种参数值
  inputChange: function (e) {

    const value = e.detail.value.trim();
    console.log("输入框值:" + value);

    // 判断输入数据的有效性
    if (value) {
      this.setData({
        inputValue: value,
        showClearFlag: true
      });

      clearInterval(this.timeId);
      // 设置定时器
      this.timeId = setTimeout(() => {
        // 延时请求数据
        this.searchList();
      }, 1000);
    }
    else {
      this.setData({
        showClearFlag: false
      });
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