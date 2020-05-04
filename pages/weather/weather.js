// pages/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '/images/999.png',
    region: ['北京', '北京', '昌平区'],
    now:null
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    this.getWeater();  //更新天气
  },

  getWeater () {
    let that = this
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now', //仅为示例，并非真实的接口地址
      data: {
        location: this.data.region[1],
        key:'dd2f215fa3854566af8e0963de1d481e'
      },
      success (res) {

        let now = res.data.HeWeather6[0].now
        that.setData({
          src: `/images/${now.cond_code}.png`,
          now: now
        })
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeater()
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