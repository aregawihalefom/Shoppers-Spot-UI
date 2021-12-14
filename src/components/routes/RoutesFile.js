import React from 'react'
import {  Outlet } from 'react-router-dom';

function RoutesFile() {
    return (
        <div>

            {/* <Routes>
                <Route exact path="/account/signin" element={<SignInForm />} />
                <Route exact path="/account/signup" element={<SignUpForm />} />
                <Route exact path="/" element={<Home />} />
               

                <Route exact path='/sellers/products' element= {<AddProduct/>}/>
                <Route path='/products/edit/:id' element={<EditProduct />} />
                <Route path='/products/details/:id' element={<ProductDetails/>}/>

           
                <Route exact path='/users/sellers' element={<ListSellers/>}/>
            </Routes> */}
            <Outlet />
        </div>
    )
}

export default RoutesFile
