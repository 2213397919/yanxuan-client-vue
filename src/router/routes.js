//引入路由
//路由组件懒加载
//通过import（）加载的模块会被单独打包。（单独的js文件：code split）
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const General = () => import('../pages/General/General.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Shopping = () => import('../pages/Shopping/Shopping.vue')

export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/general',
    component: General,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/shopping',
    component: Shopping,
  },
  {
    path: '/',
    component: Home,
  },
]

