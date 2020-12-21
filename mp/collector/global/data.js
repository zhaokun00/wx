/**
 * 定义全局的变量
 */
 const tipList = {
  loginFailed: '账号或密码错误',
  netFailed: '无网络连接',
  accountError: '账号或密码不能为空',
  historyTime: '结束时间不能小于开始时间',
  historyEmpty: '该时间段暂无历史数据',
  knowledge: '请先联系厂家获取账号再登录'
 };

//  定义常量list
 const codeList = {
  success: 200
 };

//  定义存储变量
let storeList = {
  userName: ''
};

//  定义urllist
// const basePath = 'https://hlbr.smartdeviceclub.com';
const basePath = 'https://hlbr.smartdeviceclub.cn';
const urlList = {
  loginUrl: basePath + '/user/login',
  taskUrl:  basePath + '/task/list',
  deviceRealTimeUrl:  basePath + '/data/query/realtime/app',
  deviceHistoryUrl: basePath + '/data/query/history/app',
  searchUrl: basePath + '/task/list/search',
};

module.exports = {
  urlList: urlList,
  codeList: codeList,
  tipList: tipList,
  storeList: storeList,
}
