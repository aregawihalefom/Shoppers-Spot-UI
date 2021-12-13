


import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { APP_CONFIG, paymentMethods } from '../../services/Constants'
import { storeageUtil } from '../../store/localStorage/local'
import { setMessages } from '../../store/Redux/MessageReducers'
import { useParams } from 'react-router'
import { data } from 'jquery';

function EditProduct() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [product, setProduct] = useState({ id: '', name: '', description: '', sku: '', price: '', quantity: '', banner: '' });


    const params = useParams()
    const id = params.id;

    useEffect(() => {
        // Get the details from storage
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/products/" + id)
            .then((result) => {
                setProduct(result.data)
            })
    }, [id])



    const creatForm = <div className="card">
        <div className="card-body">
            <h5 className="card-title text-center text-primary text-uppercase">Product Details </h5>
            <hr />
            <table className="table table-borderless table-hover">

                <tbody>
                    <tr>
                        <th> Name:</th>
                        <td>{product.name}</td>
                    </tr>

                    <tr>
                        <th>Price:</th>
                        <td>{product.price}</td>
                    </tr>

                    <tr>
                        <th>SKU:</th>
                        <td>{product.sku}</td>
                    </tr>

                    <tr>
                        <th>Product Quantity:</th>
                        <td>{product.quantity}</td>
                    </tr>

                    <tr>
                        <th>Description:</th>
                        <td>{product.description}</td>
                    </tr>

                </tbody>
            </table>

        </div>
    </div>

    return (
        <div>
            <div className="row ">
                <hr />
                <div className="col-8">
                <img className="img-thumbnail img-hover rounded" src={product.banner} alt="banner image"/>
                </div>
                <div className="col-4">
                    {creatForm}
                </div>
            </div>
        </div>
    )
}
export default EditProduct
