import React from 'react'
import { useParams } from 'react-router'
import { api } from '../../services/API'
import { useEffect, useState } from 'react'
function OrderDetails() {

    const param = useParams()
    const [orderState, setOrderState] = useState({})

    useEffect(() => {
        api.get("/orders/" + param.id)
            .then(result => setOrderState(result.data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-4">
                <div class="card" >
                    <div class="card-header">
                        Order Details
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Order ID : {orderState.id}</li>
                        <li class="list-group-item">Order Date : {orderState.orderDate}</li>
                        <li class="list-group-item">
                            <ul>
                            {
                                orderState == null ? orderState.products.map((product) => {
                                    return (<li key={product.id}>{product.name} , Quantity : {product.quantity}</li>)
                                }) : ''
                            }
                            </ul>
                        </li>
                        <li class="list-group-item">Sub Total : {orderState.subTotal}</li>
                        <li class="list-group-item">Tax: {orderState.taxes}</li>
                        <li class="list-group-item">Total Price: {orderState.totalPrice} </li>

                        <li class="list-group-item">
                            <p className="text-primary">Shipping address</p>
                            <p>Address Line1 : {orderState.shippingAddress.addressLine1}</p>
                            <p>Address Line2 : {orderState.shippingAddress.addressLine2}</p>
                            <p>City: {orderState.shippingAddress.addressLine1}</p>
                            <p>Zip : {orderState.shippingAddress.zipCode}</p>
                            <p>State : {orderState.shippingAddress.state}</p>
                            <p>Country : {orderState.shippingAddress.counyry}</p>

                        </li>

                        <li class="list-group-item">
                            <p className="text-primary">Billing  address</p>
                            <p>Address Line1 : {orderState.billingAddress.addressLine1}</p>
                            <p>Address Line2 : {orderState.billingAddress.addressLine1}</p>
                            <p>City: {orderState.billingAddress.addressLine1}</p>
                            <p>Zip : {orderState.billingAddress.zipCode}</p>
                            <p>State : {orderState.billingAddress.state}</p>
                            <p>Country : {orderState.billingAddress.counyry}</p>

                        </li>
                        <li class="list-group-item">Payment Method : Card</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default OrderDetails


