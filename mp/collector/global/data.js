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

//  定义urllist
// const basePath = 'http://localhost:8080';
const basePath = 'http://smartdeviceclub.com:8080';
const urlList = {
  loginUrl: basePath + '/user/login'
};

module.exports = {
  urlList: urlList,
  codeList: codeList,
  tipList: tipList,
}
