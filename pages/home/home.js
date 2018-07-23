// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  tapHandler(e) {
    let id = e.target.dataset.id
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })   
    let url = `/pages/index/index?id=${id}`
    console.log(e.target.dataset)
    wx.navigateTo({
      url: url ,
    }) 
  },
  //下拉刷新
  onPullDownRefresh () {
    
    console.log('111')

    setTimeout(() => {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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