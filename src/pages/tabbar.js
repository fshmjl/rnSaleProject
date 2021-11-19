import images from '../../app/resources/resources';
import Home from './home/home';
import Mine from './mine/mine';
import Report from './report/report';
import Message from './message/message';

export default [
  {
    icon: images.tabbar.home.normal,
    selectedIcon: images.tabbar.home.selected,
    tabPage: 'Home',
    tabName: '首页',
    navigator: false,
    component: Home,
  },
  {
    icon: images.tabbar.report.normal,
    selectedIcon: images.tabbar.report.selected,
    tabPage: 'Report',
    tabName: '报备',
    navigator: true,
    component: Report,
  },
  {
    icon: images.tabbar.message.normal,
    selectedIcon: images.tabbar.message.selected,
    tabPage: 'Message',
    tabName: '消息',
    navigator: true,
    component: Message,
  },
  {
    icon: images.tabbar.mine.normal,
    selectedIcon: images.tabbar.mine.selected,
    tabPage: 'Mine',
    tabName: '我的',
    navigator: true,
    component: Mine,
  },
];
