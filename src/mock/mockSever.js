import Mock from 'mockjs'
import HomeData from './shouye_data';

//home的数据
Mock.mock('/focusList', {
  code: 0,
  data: HomeData.focusList
})
Mock.mock('/kingKongModule', {
  code: 0,
  data: HomeData.kingKongModule
})

