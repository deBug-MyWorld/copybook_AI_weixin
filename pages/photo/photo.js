// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
  },
  takePhoto(){
    this.ctx.takePhoto({
      quality:'high',
      success:(res)=>{
        getApp().globalData.img = res.tempImagePath
        wx.redirectTo({
          url: '../preview/show',
        })   
      }
    })
  },
  backCamera(){
    wx.switchTab({
      url: '../camera/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSetting({
      success(res){
        if(!res.authSetting['scope.camera']){
          wx.authorize({
            scope: 'scope.camera',
            success(){
              console.log('授权成功')
            },fail(){
              wx.showModal({
                title:'提示',
                content:'尚未进行授权，部分功能将无法使用',
                showCancel:false,
              })
            }
          })
        }
      }
    })
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