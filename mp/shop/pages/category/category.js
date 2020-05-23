// pages/category/category.js
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧栏数据
    leftList: [],
    // 右侧栏数据
    rightList:[],
    //选中的左侧序号
    tapIndex: 0,
  },

  //总数据
  Cate: [],

  handelTap: function(e) {
    console.log(e);
    // 获取传递过来的索引值
    const tapIndex = e.currentTarget.dataset.index;
    // 根据索引值,修改右侧项的内容
    const rightList = this.Cate[tapIndex].children;
    this.setData(
      {
        // 设置选中的标签的索引值
        tapIndex,
        // 设置右侧项内容
        rightList,
      }
    );
  },

   // 获取 分类导航数据
   getCateList:function () {
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'}).then(
      // 箭头函数,主要是匿名函数,result是传入参数
      result => {
        console.log(result);
        // 必须声明号变量,否则会报错
        // let l = result.data.message[0].cat_name;
        // 从数组中获取某个字段中的数据
        this.Cate = result.data.message;
        let leftList = this.Cate.map(v => v.cat_name);
        // 获取json数据中的各种数据
        let rightList =  this.Cate[0].children;
        // console.log(leftList);
        // console.log(rightList);

        this.setData(
          {
            // 第一种赋值形式
            // leftList:leftList,
            // 第二种赋值形式 
            leftList,
            rightList,
          }
        );
      }
    ).catch( //异常回调的函数
      err => {
        console.log(err);
      }
    );
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCateList();
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