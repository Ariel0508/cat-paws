import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontView/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/frontView/ProductsView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/frontView/ProductView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontView/ProductView.vue')
      },
      {
        path: 'saleproducts',
        component: () => import('../views/frontView/SaleProductsView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/frontView/AboutView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/frontView/CartView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/frontView/OrderView.vue')
      },
      {
        path: 'completed/:orderId',
        component: () => import('../views/frontView/CompletedView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/frontView/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/AdminProductsView.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/dashboard/AdminCouponView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/AdminOrderView.vue')
      }
    ]
  },
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  routes
})

export default router
