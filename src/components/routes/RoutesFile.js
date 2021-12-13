import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home';
import SignInForm from '../account/SignInForm'
import SignUpForm from '../account/SignUpForm';
import AddProduct from '../product/AddProduct';

function RoutesFile() {
    return (
        <div>

            <Routes>
                <Route exact path="/account/signin" element={<SignInForm />} />
                <Route exact path="/account/signup" element={<SignUpForm />} />
                <Route exact path="/" element={<Home />} />

                {/* Product related routes */}

                <Route exact path='/sellers/products' element= {<AddProduct/>}></Route>
            </Routes>


        </div>
    )
}

export default RoutesFile
