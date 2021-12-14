import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home';
import SignInForm from '../account/SignInForm'
import SignUpForm from '../account/SignUpForm';
import EditProduct from '../product/EditProduct';
import AddProduct from '../product/AddProduct';
import ProductDetails from '../product/ProductDetails'
import ListSellers from '../admin/ListSellers';

function RoutesFile() {
    return (
        <div>

            <Routes>
                <Route exact path="/account/signin" element={<SignInForm />} />
                <Route exact path="/account/signup" element={<SignUpForm />} />
                <Route exact path="/" element={<Home />} />
                {/* Product related routes */}

                <Route exact path='/sellers/products' element= {<AddProduct/>}/>
                <Route path='/products/edit/:id' element={<EditProduct />} />
                <Route path='/products/details/:id' element={<ProductDetails/>}/>

                {/* Admin routes */}
                <Route exact path='/users/sellers' element={<ListSellers/>}/>
            </Routes>
        </div>
    )
}

export default RoutesFile
