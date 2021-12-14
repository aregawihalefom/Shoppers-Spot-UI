export const routes = [
    {
        id: 0,
        name: 'Sellers',
        path: '/shop/sellers',
        roles: ['admin', 'buyer']
    },

    {
        id: 1,
        name: 'Manage Product',
        path: '/shop/products/add-product',
        roles: ['seller']
    },
    {
        id: 2,
        name: 'Mananage Product',
        path: '/shop/products/edit',
        roles: ['seller']
        
    },
    {
        id: 1,
        name: 'Manage Product',
        path: '/shop/products/detail',
        roles: ['seller']
    },
]

// export const routeAccess = {
//     admin: ['sellers', 'products'],
//     buyer: ['order', 'products'],
//     seller: ['/products/edit/','add-product'],
// }