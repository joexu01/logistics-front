import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '使用说明',
        meta: { title: '使用说明', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/manufacturer',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/manufacturer/index'),
        name: 'manufacturer',
        meta: { title: '制造商', icon: 'example', affix: false },
        hidden: false
      },
      {
        path: 'product',
        component: () => import('@/views/manufacturer/queryProdInfo'),
        name: '制造商-查询批次信息',
        meta: { title: '制造商-查询批次信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'order',
        component: () => import('@/views/manufacturer/queryOrderInfo'),
        name: '制造商-查询订单详情',
        meta: { title: '制造商-查询订单详情', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'order/unaccepted',
        component: () => import('@/views/manufacturer/getOrderRequests'),
        name: '制造商-查询订单请求',
        meta: { title: '制造商-查询订单请求', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'tracking',
        component: () => import('@/views/manufacturer/queryLogisticsInfo'),
        name: '制造商-查询物流信息',
        meta: { title: '制造商-查询物流信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'new/product',
        component: () => import('@/views/manufacturer/newProdInfo'),
        name: '制造商-产品批次信息上链',
        meta: { title: '制造商-产品批次信息上链', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'new/order',
        component: () => import('@/views/manufacturer/newOrder'),
        name: '制造商-新建订单',
        meta: { title: '制造商-新建订单', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'new/send',
        component: () => import('@/views/manufacturer/sendGoodsOff'),
        name: '制造商-发货记录上链',
        meta: { title: '制造商-发货记录上链', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'qrcode',
        component: () => import('@/views/manufacturer/generateQRCode'),
        name: '制造商-生成二维码',
        meta: { title: '制造商-生成二维码', icon: 'example', affix: false },
        hidden: true
      }
    ]
  },
  {
    path: '/logistics',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/logistics/index'),
        name: 'logistics',
        meta: { title: '物流公司', icon: 'drag', affix: false },
        hidden: false
      },
      {
        path: 'product',
        component: () => import('@/views/logistics/queryProdInfo'),
        name: '物流公司-查询批次信息',
        meta: { title: '物流公司-查询批次信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'tracking',
        component: () => import('@/views/logistics/queryLogisticsInfo'),
        name: '物流公司-查询物流记录',
        meta: { title: '物流公司-查询物流记录', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'update',
        component: () => import('@/views/logistics/updateLogisticsRecord'),
        name: '物流公司-物流记录上链',
        meta: { title: '物流公司-物流记录上链', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'user/update/:id',
        component: () => import('@/views/logistics/updateLogisticsRecord'),
        name: '物流公司-物流记录上链',
        meta: { title: '物流公司-物流记录上链', icon: 'example', affix: false },
        hidden: true
      }
    ]
  },
  {
    path: '/retailer1',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/retailer1/index'),
        name: 'retailer1',
        meta: { title: '零售商1', icon: 'tree', affix: false },
        hidden: false
      },
      {
        path: 'product',
        component: () => import('@/views/retailer1/queryProdInfo'),
        name: '零售商1-查询批次信息',
        meta: { title: '零售商1-查询批次信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'tracking',
        component: () => import('@/views/retailer1/queryLogisticsInfo'),
        name: '零售商1-查询物流记录',
        meta: { title: '零售商1-查询物流记录', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'order',
        component: () => import('@/views/retailer1/queryOrderInfo'),
        name: '零售商1-查询订单详情',
        meta: { title: '零售商1-查询订单详情', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'sign',
        component: () => import('@/views/retailer1/signForGoods'),
        name: '零售商1-签收货物',
        meta: { title: '零售商1-签收货物', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'new/order',
        component: () => import('@/views/retailer1/createOrder'),
        name: '零售商1-新建订单',
        meta: { title: '零售商1-新建订单', icon: 'example', affix: false },
        hidden: true
      }
    ]
  },
  {
    path: '/retailer2',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/retailer2/index'),
        name: 'retailer2',
        meta: { title: '零售商2', icon: 'tree', affix: false },
        hidden: false
      },
      {
        path: 'product',
        component: () => import('@/views/retailer2/queryProdInfo'),
        name: '零售商2-查询批次信息',
        meta: { title: '零售商2-查询批次信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'tracking',
        component: () => import('@/views/retailer2/queryLogisticsInfo'),
        name: '零售商2-查询物流记录',
        meta: { title: '零售商2-查询物流记录', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'order',
        component: () => import('@/views/retailer2/queryOrderInfo'),
        name: '零售商2-查询订单详情',
        meta: { title: '零售商2-查询订单详情', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'sign',
        component: () => import('@/views/retailer2/signForGoods'),
        name: '零售商2-签收货物',
        meta: { title: '零售商2-签收货物', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'new/order',
        component: () => import('@/views/retailer2/createOrder'),
        name: '零售商2-新建订单',
        meta: { title: '零售商2-新建订单', icon: 'example', affix: false },
        hidden: true
      }
    ]
  },
  {
    path: '/regulator',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/regulator/index'),
        name: 'regulator',
        meta: { title: '监管机构', icon: 'eye-open', affix: false },
        hidden: false
      },
      {
        path: 'product',
        component: () => import('@/views/regulator/queryProdInfo'),
        name: '监管机构-查询批次信息',
        meta: { title: '监管机构-查询批次信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'tracking',
        component: () => import('@/views/regulator/queryLogisticsInfo'),
        name: '监管机构-查询物流记录',
        meta: { title: '监管机构-查询物流记录', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'private',
        component: () => import('@/views/regulator/queryLogisticsInfoFull'),
        name: '监管机构-查询物流关联人员信息',
        meta: { title: '监管机构-查询物流关联人员信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'public/product/:id',
        component: () => import('@/views/regulator/queryProdInfo'),
        name: '公众查询-批次信息',
        meta: { title: '公众查询-批次信息', icon: 'example', affix: false },
        hidden: true
      },
      {
        path: 'public/tracking/:id',
        component: () => import('@/views/regulator/queryLogisticsInfo'),
        name: '公众查询-物流记录',
        meta: { title: '公众查询-物流记录', icon: 'example', affix: false },
        hidden: true
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
