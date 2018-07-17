// pages/personal/index.js
//获取应用实例
//import { HFIVE_IMAGESONE } from "../../consts"
const app = getApp()
var util = require('../../utils/util.js');

// var test=require('../../pages/test/test.js')
Page({
  // helloMINA:function(){
  //   test.sayHello('MINA')
  // },

  /**
   * 页面的初始数据
   */
  data: {
    //H5_image1: HFIVE_IMAGESONE,
    msg:'Hello,',
    array:['广州','厦门','上海','南京','成都','重庆','连云港'],
    time:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });

    
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
  changeMap: function () {
    wx.navigateTo({
      url: '../../pages/test/test',
    })

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