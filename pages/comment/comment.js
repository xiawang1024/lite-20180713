// pages/comment/comment.js

const backgroundAudioManager = wx.getBackgroundAudioManager()

const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    anchorIsFixed:false,
    isShowProgram:true,
    percent:0,
    currentTime:'00:00',
    duration:'00:00',
    isPlay:true
  },
  onPageScroll(options) {
    let {scrollTop} = options
    if(scrollTop >= 100) {
      this.setData({
        anchorIsFixed:true
      })
    }else {
      this.setData({
        anchorIsFixed: false
      })
    }
  },
  openProgram() {
    this.setData({
      isShowProgram:false
    })
  },
  closeProgram() {
    this.setData({
      isShowProgram: true
    })
  },
  previewImage(url = "http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg?1511506999379") {
    
    wx.previewImage({
      current: "http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg?1511506999379", // 当前显示图片的http链接
      urls: ["http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg?1511506999379"] // 需要预览的图片http链接列表
    })
  },
  chooseImage() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  listenPlayer(src) {
    backgroundAudioManager.title = src;
    backgroundAudioManager.src = src;
    backgroundAudioManager.protocol = 'hls';
    backgroundAudioManager.onPlay(() => {
      this.setData({
        isPlay: true
      })
    })
    backgroundAudioManager.onPause(() => {
      this.setData({
        isPlay: false
      })
    })
    backgroundAudioManager.onTimeUpdate(() => {
      let { duration, currentTime } = backgroundAudioManager
      let percent = (currentTime / duration * 100).toFixed(2);      
      duration = util.formatPlayTime(duration)
      currentTime = util.formatPlayTime(currentTime)
      this.setData({
        currentTime,
        duration,
        percent
      })
    })
  },
  seekAudio(event) {    
    let { value } = event.detail
    let seekTime = backgroundAudioManager.duration * value / 100;    
    backgroundAudioManager.seek(seekTime)
    setTimeout(() => {
      backgroundAudioManager.play()
    },20)
  },
  switchPlayStatus() {
    if(backgroundAudioManager.paused) {
      backgroundAudioManager.play() 
    }else {
      backgroundAudioManager.pause()
    }
  },
  audioPause() {
    backgroundAudioManager.pause()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load')
    this.listenPlayer('http://owaup0bqu.bkt.clouddn.com/wangfei.mp3')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
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
    wx.showToast({
      title: 'hide',
    })
    // backgroundAudioManager.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.showToast({
      title: 'unload',
    })
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