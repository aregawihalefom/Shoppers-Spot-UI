export const routes = [
    {
        id: 0,
        name: 'Manage Sellers',
        path: '/shop/sellers',
        roles: ['admin']
    },

    {
        id: 8,
        name: 'Manage Reviews',
        path: '/shop/reviews',
        roles: ['admin']
    },

    {
        id: 1,
        name: 'Manage Products',
        path: '/shop/products/add-product',
        roles: ['seller']
    },
    {
        id: 2,
        name: '',
        path: '/shop/products/edit',
        roles: ['seller']
        
    },
    {
        id: 3,
        name: '',
        path: '/shop/products/detail',
        roles: ['seller']
    },
    {
        id:4,
        name:'Manage Orders',
        path: '/shop/orders/myorders',
        roles:['seller']
    },
    {
        id:5,
        name:'',
        path: '/shop/orders/checkout',
        roles:['buyer']
    },
    {
        id:6,
        name:'',
        path: '/shop/orders/myorders/details',
        roles:['seller']
    },
  
    {
        id:7,
        name:'My Orders',
        path: '/shop/user/orders',
        roles:['buyer']
    },

]

export const routeAccess = {
    admin: ['sellers', 'reviews'],
    buyer: ['order', 'products'],
    seller: ['/products/edit/','add-product'],
}