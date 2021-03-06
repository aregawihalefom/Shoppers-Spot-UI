
import SignInForm from '../account/SignInForm'
import SignUpForm from '../account/SignUpForm';
import EditProduct from '../product/EditProduct';
import AddProduct from '../product/AddProduct';
import ProductDetails from '../product/ProductDetails'
import ListSellers from '../admin/ListSellers';
import Home from '../Home';
import RoutesFile from './RoutesFile'
import { Navigate } from 'react-router';
import CheckoutContainer from '../cart/checkout';
import OrderContainer from '../cart/OrderContainer';
import OrderDetails from '../cart/OrderDetails';
import OrderContainerUser from '../cart/OrderContainerUser';
import ListReview from '../admin/ListReview';

const routes = (loggedIn) => [
    {
      path: '/shop',
      element:  <RoutesFile /> ,
      children: [
        { path: 'sellers', element: <ListSellers /> },
        { path: 'home', element: <Home /> },
        { path: 'products/add-product', element: <AddProduct /> },
        { path: 'products/edit/:id', element: <EditProduct /> },
        { path: 'products/detail/:id', element: <ProductDetails /> },
        { path: 'orders/checkout', element: <CheckoutContainer /> },
        { path: 'orders/myorders', element: <OrderContainer /> },
        { path: 'orders/myorders/detail/:id', element: <OrderDetails /> },
        // { path: 'add-buyer', element: <AddBuyer /> },
        // { path: 'add-seller', element: <AddSeller /> },

        { path: 'reviews', element: <ListReview /> },


        // { path: 'add-product', element: <AddProduct /> },
        // { path: 'add-admin', element: <AddAdmin /> },
        { path: '', element: <Navigate to="/shop/home" /> }
      ],
    }, 

    { path: '/login', element: <SignInForm /> }, 
    { path: '/signup', element: loggedIn ? <Navigate to='/shop'/>: <SignUpForm /> },
    {path: '', element: <Navigate to="/shop" />}
  
]

  export default routes;