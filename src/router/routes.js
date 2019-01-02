//引入路由
//路由组件懒加载
//通过import（）加载的模块会被单独打包。（单独的js文件：code split）
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const General = () => import('../pages/General/General.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Shopping = () => import('../pages/Shopping/Shopping.vue')
const Login = () => import('../pages/Login/Login.vue')
const HomeOther = () => import('../components/HomeOther/HomeOther')

export default [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'/home/list/:id',
        component:HomeOther,
      }
    ],
    meta: {
      showFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/general',
    component: General,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopping',
    component: Shopping,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
    meta: {
      showFooter: true
    }
  },
]

