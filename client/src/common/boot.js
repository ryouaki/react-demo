/*
 * 用于动态设置html标签的font-size大小，用于自适应各种屏幕尺寸。
 */

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
