// 导入数据
const detailList = require('../../data/lol_details_duowan.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    //  for(let i=0;i<detailList.length;i++) {
    //    if(detailList[i].id===options.id){
    //      this.setData({
    //        hero:detailList[i]
    //      })
    //    }
    //  }
    // find找到匹配的第一项就返回
    let hero = detailList.find(item => item.id === options.id)
    this.setData({
      hero
    })
    wx.setNavigationBarTitle({
      title: hero.title+'-'+hero.name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})