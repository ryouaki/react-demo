/*
 * 用于初始化设置前端系统参数
 */
import Axios from 'axios';
// const utils = require('./../../../common/utils');
// 获取屏幕可视宽度，并设置html标签的font-size。
let resizeCallback = () => {
  let rootFontSize = 0;
  let width = document.body.clientWidth;
  let html = document.getElementsByTagName('html')[0];

  if (width <= 720) {
    rootFontSize = width / 80; // 一般来讲，各种移动设备的屏幕宽度都是80的整数倍。
    html.style.fontSize = rootFontSize + 'px';
  } else {
    html.style.fontSize = '16px';
  }
}

// 注册浏览器缩放的事件。
window.addEventListener('resize', resizeCallback, false);

// 在程序启动就设置html标签的font-size。
resizeCallback();

let root = process.env.PUBLIC_URL;
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.timeout = 25000;
if (process.env.NODE_ENV !== 'production') {
  Axios.defaults.baseURL = 'http://localhost:3000';
  Axios.defaults.withCredentials = true;
} else {
  Axios.defaults.baseURL = root;
}
