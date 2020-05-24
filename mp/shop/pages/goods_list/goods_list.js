// pages/goods_list/goods_list.js
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //Tabs数据,定义父控件向子控件传递的数据,数据类型为数组类型
    tabs: [{
      id: 0,
      name: '综合',
      isActive: true
    }, {
      id: 1,
      name: '销量',
      isActive: false
    }, {
      id: 2,
      name: '价格',
      isActive: false
    }],

    //商品列表数据
    goodList: []
  },

  //获取商品列表请求参数
  goodParams: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  },

  tabsItemChange: function (e) {
    console.log("父组件获取到的数据");
    console.log(e);
    const id = e.detail.id;
    const tabs = this.data.tabs;

    /**forEach的用法格式
     * 数组名.forEach(function(item-单项元素值, index-索引){console.log(item);}）
     */
    tabs.forEach(
      (v, i) => i === id ? v.isActive = true : v.isActive = false
    )
    /*
    tabs.forEach(function(item,index){
      if(index == id) {
        item.isActive = true;
      }
      else {
        item.isActive = false;
      }
    });
    */
    this.setData({
      tabs
    })

    /*
    //==只是判断值,===判断类型和值1 == "1" // true,1 === "1" // false
    //测试==与===运算符
    let a = 1;
    let b = 1;
    let c = "1";
    if(a === b) {
      console.log("a===b");
    }
    else {
      console.log("a!===b");
    }

    if(a === c) {
      console.log("a===c");
    }
    else {
      console.log("a!===c");
    }

    if(a == c) {
      console.log("a==c");
    }
    else {
      console.log("a!==c");
    }
    */
  },

  getGoodsList: function() {
    request({ url: "/goods/search", data: this.goodParams }).then(
      // 箭头函数,主要是匿名函数,result是传入参数
      result => {
        let goodList = result.data.message;
        console.log(goodList);
        this.setData(
          {
            goodList: goodList.goods,
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
    console.log(options);
    this.goodParams.cid = options.cid

    this.getGoodsList();
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