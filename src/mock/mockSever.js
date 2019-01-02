import Mock from 'mockjs'
import HomeData from './shouye_data';
import FenLei_zhuangqu from './fenlei_zhuanqu';

//home的数据
Mock.mock('/focusList', {
  code: 0,
  data: HomeData.focusList
})
Mock.mock('/kingKongModule', {
  code: 0,
  data: HomeData.kingKongModule
})
//category
Mock.mock('/categoryL1List',{
  code:0,
  data:FenLei_zhuangqu.categoryL1List
})
//General


