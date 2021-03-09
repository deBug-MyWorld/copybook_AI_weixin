// pages/preview/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },
  upload(){
    var that = this
    wx.showLoading({
      title: '加载中...'
    })
    // setTimeout(() => {
    //   wx.hideLoading({
    //     success: (res) => {
    //       wx.redirectTo({
    //         url: '../result/result',
    //       })
    //     },
    //   })
    // }, 2000);
    console.log(that.data.src)
    wx.uploadFile({
      url: 'http://127.0.0.1:8000/upload/',
      filePath: that.data.src,
      name: 'image',
      success:function(res){
        console.log(res)
        console.log('上传成功')
        wx.hideLoading({
          success: (res) => {
            wx.redirectTo({
              url: '../result/result',
            })
          },
        })
      },
      fail:function(res){
        console.log(res)
      }
    })
  },
  backCamera(){
    wx.switchTab({
      url: '../camera/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      src:getApp().globalData.img
    })
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