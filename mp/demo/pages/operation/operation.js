// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   * 全局变量:里面的数据可以在调试窗口AppData中看到
   */
  data: {
    num:10,
    name:'zhaokun',
    flag:false,
    list:['zk','00'],
    array:[
      {
        id:1,
        name:'zk'
      },
      {
        id:2,
        name:'00'
      }

    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.onTest1();
    this.onTest2();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
    //直接调用,再编译时会报错
    console.log("j = " + this.data.j);

    console.log(this.data.num);
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

  },
  /*
   *
  */
  onTest2: function() {
    //测试一元运算符
    var a = 10;
    console.log("a = " + a++); //输出10
    console.log("a = " + a); //输出11
    var b = ++a;
    console.log("b = " + b); //输出12
    console.log("a = " + a); //输出12

    //测试等于运算符
    // console.log(a === 12);
    if(a === 13){
      console.log("a === 12");
    }
    else {
      console.log("a != 12");
    }

    //测试三元运算符
    console.log(a === 12 ? "a === 12" : "a!=12");
  },

  /**
   * 测试1:测试基本变量
   */
  onTest1: function() {
    //(1)定义整型变量
    var a = 10, b = 20;
    //输出变量及变量的运算
    console.log(a,b,a+b); //输出10 20 30

    //(2)定义字符串变量
    var s1 = 'zhaokun',s2 = 'name';
    console.log(s1,s2,s1 + " " + s2); //输出zhaokun name zhaokun name

    //(3)整型变量与字符串的拼接
    console.log(a+s1); //输出10zhaokun

    //(4)const与var类型变量
    const c=1
    console.log(c); //输出1
    // 由于上面已经定义c为const类型,因此下面赋值不能再次进行,在编译时就会报错
    // c=10
    //由于上面定义s1为var类型,下面的赋值同样可以进行赋值
    s1 = 'age'
    console.log(s1) //输出age

    //(5)var与let类型
    /* 用let的方式声明的变量为局部变量,该变量只会在最靠近{}内的范围有效，出了{}之后,该变量就不能再使用了,否则会报该变量未定义的错误,也就是说该变量的作用域为所在代码块内
    * 用var的方式声明的变量为全局变量,其作用域为所在的函数内，在js文件的其余函数中，如果直接拿来用，也会报变量未定义的错误
    */
    for(let i = 0;i < 5;i++){
      console.log("i = " + i);
    }
    //let定义的变量该语句会报错
    // console.log("i = " + i);

    for(var j = 0;j < 5;j++){
      console.log("j = " + j);
    }
    //var定义的变量该语句不会报错
    console.log("j = " + j);

    //(6)打印data中的变量,其中前2种种的打印方式为错误的打印方式
    // console.log(num); //该方式为打印函数内变量的方式
    // console.log({{num}}); //该方式为wxml中引用变量的方式
    //正确的打印方式,打印data中的数据方式
    console.log(this.data.num);

    //(7)data变量的赋值方式
    //第一种赋值方式:
    // this.data.num = "10000"; //该种方式在js文件中数据发生了变化,但是在AppData中数据中数据未发生变化,同样也不会同步到wxml文件中
    //第二种赋值方式:
    this.setData( //该种方式在js文件中数据发生了变化,在AppData中数据中数据也发生变化,同样会同步到wxml文件中
      //第二种赋值方式:
      {num:10000}
    );
    //打印data中的数据方式
    console.log(this.data.num);

    //(8)动态赋值方式一:
    this.data.j = 999
    //动态赋值方式二:
    // this.setData(
    //   {j:888}
    // );

    var o = {num:1,name:'zhaokun'};
    // 函数的调用方式:this.函数名,如果直接写函数名则编译时会进行报错
    var r = this.onUserFunction(o);
    console.log(r);
  },
  /**
   * 自定义函数
   * 格式:
   * 函数名: 关键字function() {
   *  代码段
   * }
   */
  onUserFunction: function(e) {
    console.log("onUserFunction");
    console.log(e);
    console.log(e.num + " " + e.name)

    return e;
  }
})