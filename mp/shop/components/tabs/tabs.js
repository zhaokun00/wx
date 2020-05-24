// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表,通过该属性向子控件传递数据
   */
  properties: {
    // 控件的名字
    tabs: {
      // 控件的类型
      type: Array,
      // 控件的默认数据
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表,通过该方法子控件向父控件传递数据
   */
  methods: {

    // 该方法名为子控件绑定的事件方法名
    tabsTap(e) {
      console.log(e);
      // 获取传递的私有数据
      const data = e.currentTarget.dataset;
      // console.log(data);
      // 触发父类组件的方法,参数1:父组件中在属性上绑定的事件名字 参数2:数据
      // <tabs tabs="{{tabs}}" bindtabsChange="tabsItemChange">
      this.triggerEvent("tabsChange", data)
    }
  }
})