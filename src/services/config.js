export const routes = [
    {
        id: 0,
        name: 'Sellers',
        path: '/shop/sellers',
        roles: ['admin', 'buyer']
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
        name:'Manage Sales',
        path: '/shop/seller/report',
        roles:['seller']
    },
    {
        id:5,
        name:'',
        path: '/shop/orders/checkout',
        roles:['buyer']
    }

]

export const routeAccess = {
    admin: ['sellers', 'products'],
    buyer: ['order', 'products'],
    seller: ['/products/edit/','add-product'],
}