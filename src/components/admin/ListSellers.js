import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { APP_CONFIG, paymentMethods } from '../../services/Constants'
import { storeageUtil } from '../../store/localStorage/local'
import { setMessages } from '../../store/Redux/MessageReducers'
import { useParams } from 'react-router'
import SellerListTable from './SellerListTable';


function ListSellers() {

    const [values, setValues] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [sellers, setSellers] = useState([])


    const [products, setProducts] = useState([])

    useEffect(() => {
        // Get the details from storage
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/users/sellers")
            .then((result) => {
                setProducts(result.data)
                console.log(result.data)
            })
    }, [])

    return (
        <div className="mt-4">
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All Sellers</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Pending Sellers</button>
                  
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <SellerListTable sellers={sellers} type="0" />
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        <SellerListTable sellers={sellers} type="1" />

                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                    </div>
                   
                </div>
            </div>
        </div>

    )
}
export default ListSellers
