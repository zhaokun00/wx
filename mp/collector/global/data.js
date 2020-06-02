/**
 * 定义全局的变量
 */
 const tipList = {
  loginFailed: '账号或密码错误',
  netFailed: '无网络连接',
  accountError: '账号或密码不能为空'
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
const basePath = 'https://114.55.171.27';
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
