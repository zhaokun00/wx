const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      method: 'POST',
      success: (result) => {
        console.log(result);
        resolve(result.data);
      },
      fail: (err) => {
        console.log("请求服务器失败");
        reject(err);
      },
    })
  });
}

module.exports = {
  formatTime: formatTime,
  httpRequest: request
}
