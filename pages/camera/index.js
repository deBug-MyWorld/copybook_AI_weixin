var app = getApp()
Page({
  goPhoto() {
    wx.redirectTo({
      url: '../photo/photo',
    })
  },
  chooseAlbum(){
    wx.chooseImage({
      count: 1,
      sizeType:['original','compressed'],
      sourceType:['album'],
      success(res){
        app.globalData.img = res.tempFilePaths[0]
        wx.redirectTo({
          url: '../preview/show',
        })
      }
    })
  }
})