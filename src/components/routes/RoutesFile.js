import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home';
import SignInForm from '../account/SignInForm'

function RoutesFile() {
    return (
        <div>

            <Routes>
                <Route exact path="/account/signin" element={<SignInForm />} />
                <Route exact path="/account/signup" element={<Home />} />
                <Route exact path="/" element={<Home />} />
            </Routes>


        </div>
    )
}

export default RoutesFile
