export const request = (params) => {
  return new Promise((resolve,reject) => {
    wx.request({
      ...params,
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