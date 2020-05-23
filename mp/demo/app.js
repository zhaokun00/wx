/*
  应用生命周期:全局的生命周期,这些函数都是回调函数,都被小程序内的框架调用
*/
App({

  /**
   * 应用第一次启动的就会触发该事件,全局只触发一次
   * 应用场景:当应用第一次启动的时候，获取用户的个人信息
   */
  onLaunch: function () {
    console.log("app.js:onLaunch");
    // 测试1:配合回调函数onError使用,这里故意写的语法错误,onError将被调用
    // c;

    //测试2:测试onPageNotFound回调函数,在这里写也不会进入到该回调函数中
    // wx.navigateTo({
    //   url: 'pages/startDemo/startDemo1',
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow,即当应用被用户看到.将小程序从后台切换到前台,该回调函数将被调用
   */
  onShow: function (options) {
    console.log("app.js:onShow");
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide,即应用被隐藏了.将小程序放到后台运行,该回调函数将被调用
   * 应用场景:用于暂停或者停止定时器
   */
  onHide: function () {
    console.log("app.js:onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   * 应用场景:在应用发生代码报错的时候，收集用户的错误信息，通过异步请求，将错误的信息发送给后台
   */
  onError: function (msg) {
    console.log("app.js:onError");
    console.log(msg);
  },

  /*
    页面找不到就会触发,当应用第一次启动的时候,如果找不到第一个页面才会触发
    测试步骤:取消普通编译,添加一个编译模式,设置一个跳转到不存在的页面上
    (1)app.json文件中添加页面是不管用的,原因是ide会自动生成一个命名的页面
  */
  onPageNotFound: function() {
    console.log("app.js:onPageNotFound");

    //当发现跳转的页面不存在时,使用代码跳转到一个指定的页面
    wx.navigateTo({
      url: 'pages/startDemo/startDemo',
    })
  }

})
