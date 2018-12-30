import ajax from './ajax'
const BASE = '/api'  // 开发环境下需要使用代理帮我们转发请求
export const reqBanner = ()=> ajax('/focusList',{},"POST")
export const reqkingKongModule = ()=> ajax('/kingKongModule',{},"POST")
