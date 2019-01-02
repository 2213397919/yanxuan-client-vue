import ajax from './ajax'
const BASE = '/api'  // 开发环境下需要使用代理帮我们转发请求
const YAN = 'yx'
export const reqBanner = ()=> ajax('/focusList',{},"POST")
export const reqkingKongModule = ()=> ajax('/kingKongModule',{},"POST")
export const reqCategoryL1List = ()=> ajax('/categoryL1List',{},"POST")
export const reqTab = ()=> ajax(YAN+'/getTabs.json')
export const reqTuiJina = ()=> ajax(YAN+'/recManual.json')
export const reqDaRen = ()=> ajax(YAN+'/getTabData.json?page=1&size=5&tabId=4');
