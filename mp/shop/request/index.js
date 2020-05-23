export const request = (params) => {

  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";

  return new Promise((resolve,reject) => {
    // 在{}中命令的对象中进行赋值用:,而在普通函数赋值用=
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        // console.log("success");
        // 成功回调的函数
        resolve(result); 
      },
      fail: (err) => {
        // 失败回调的函数
        console.log("failed");
        reject(err);
      },
    })
  });
}