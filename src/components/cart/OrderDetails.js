import React from 'react'
import { useParams } from 'react-router'
import { api } from '../../services/API'
import { useEffect, useState } from 'react'
import { storeageUtil } from '../../store/localStorage/local'
function OrderDetails() {

    const param = useParams()
    const [orderState, setOrderState] = useState({})

    useEffect(() => {
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/orders/" + param.id)
            .then(result => {
                setOrderState(result.data)
            })
    }, [])

    return (
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-4">
                <div className="card" >
                    <div className="card-header">
                        Order Details
                    </div>
                    {orderState == null ? '' :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Order ID : {orderState.id}</li>
                            <li className="list-group-item">Order Date : {orderState.orderDate}</li>
                            <li className="list-group-item">
                                <ul>
                                    {
                                        orderState == null ? orderState.products.map((product) => {
                                            return (<li key={product.id}>{product.name} , Quantity : {product.quantity}</li>)
                                        }) : ''
                                    }
                                </ul>
                            </li>
                            <li className="list-group-item">Sub Total : {orderState.subTotal}</li>
                            <li className="list-group-item">Tax: {orderState.taxes}</li>
                            <li className="list-group-item">Total Price: {orderState.totalPrice} </li>

                            <li className="list-group-item">
                                <p className="text-primary">Shipping address</p>
                                {
                                    orderState.shippingAddress == null ? '' :
                                        <div>
                                            <p>Address Line1 : {orderState.shippingAddress.addressLine1}</p>
                                            <p>Address Line2 : {orderState.shippingAddress.addressLine2}</p>
                                            <p>City: {orderState.shippingAddress.addressLine1}</p>
                                            <p>Zip : {orderState.shippingAddress.zipCode}</p>
                                            <p>State : {orderState.shippingAddress.state}</p>
                                            <p>Country : {orderState.shippingAddress.counyry}</p>
                                        </div>
                                }

                            </li>

                            <li className="list-group-item">
                                <p className="text-primary">Billing  address</p>
                                {
                                    orderState.billingAddress == null ? '':
                                
                               <div>
                               <p>Address Line1 : {orderState.billingAddress.addressLine1}</p>
                                <p>Address Line2 : {orderState.billingAddress.addressLine1}</p>
                                <p>City: {orderState.billingAddress.addressLine1}</p>
                                <p>Zip : {orderState.billingAddress.zipCode}</p>
                                <p>State : {orderState.billingAddress.state}</p>
                                <p>Country : {orderState.billingAddress.counyry}</p>
                               </div>}

                            </li>
                            <li className="list-group-item">Payment Method : Card</li>

                        </ul>
                    }
                </div>
            </div>

        </div>
    )
}

export default OrderDetails


