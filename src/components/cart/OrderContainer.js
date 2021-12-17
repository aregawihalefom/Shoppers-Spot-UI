import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { storeageUtil } from '../../store/localStorage/local'
import { APP_CONFIG } from '../../services/Constants';

function OrderContainer() {
    
    //const dispatch = useDispatch()
    const navigate = useNavigate()

    //const token = storeageUtil.getItem(APP_CONFIG.data.TOKEN_NAME);
    const id = storeageUtil.getItem(APP_CONFIG.data.ID)
    // const [sellers, setSellers] = useState([])
    const [changes , setchanges] = useState(false)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/orders/users/" + id)
            .then((result) => {
                setOrders(result.data)
            })
    }, [changes])


    const cancelOrder = (id) => {
        api.delete("/orders/" + id)
            .then(res => 
                {
                    console.log(res.data)
                    setchanges(previous => !previous)
                })

    }


    const showDetails = (id) => {
        navigate("/shop/orders/myorders/detail/" + id)
    }
    return (
        <div className="mt-4">
            <hr />
            <h5 className="text-primary">Orders Dashboard</h5>
            <hr />
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                        data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Active Orders</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancelled</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Order History</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <table className="table table-hover table-striped table-condensed">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Items</th>
                                <th scope="col">Total Price</th>
                                <th scope="col"> Order Status </th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        {

                            <tbody>
                                {
                                    orders == null ? '' :
                                        orders.map((order) => {
                                            return ( 
                                                order.orderStatus.name !=='ORDER_PLACED' ? '' : 
                                                <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.products.map((product => {
                                                    return (<p key={product.id}>{product.name} , Quantity : {product.quantity}</p>)
                                                }))}</td>

                                                <td>${order.totalPrice}</td>
                                                <td>{order.orderStatus.name}</td>
                                                <td>
                                                    <div className="button-group">
                                                        <button className='btn btn-success' onClick={() => showDetails(order.id)}>Details</button> &nbsp;
                                                        <button className='btn btn-danger' onClick={() => cancelOrder(order.id)}>Cancel Order</button>
                                                    </div>
                                                </td>
                                            </tr>
                                                
                                             
                                            )
                                        })
                                }

                            </tbody>}
                    </table>


                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                <table className="table table-hover table-striped table-condensed">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Items</th>
                                <th scope="col">Total Price</th>
                                <th scope="col"> Order Status </th>
                                <th scope="col">Cancellation Data</th>
                            </tr>
                        </thead>
                        {

                            <tbody>
                                {
                                    orders == null ? '' :
                                        orders.map((order) => {
                                            return ( 
                                                order.orderStatus.name !=='ORDER_CANCELLED' ? '' : 
                                                <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.products.map((product => {
                                                    return (<p key={product.id}>{product.name} , Quantity : {product.quantity}</p>)
                                                }))}</td>

                                                <td>${order.totalPrice}</td>
                                                <td className="text-danger">Cancelled</td>
                                                <td>{order.statusUpdateAt}</td>
                                               
                                            </tr>
                                                
                                             
                                            )
                                        })
                                }

                            </tbody>}
                    </table>


                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <table className="table table-hover table-striped table-condensed">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Items</th>
                                <th scope="col">Total Price</th>
                                <th scope="col"> Order Status </th>
                                <th scope="col"> Delivered on </th>
                    
                            </tr>
                        </thead>
                        {

                            <tbody>
                                {
                                    orders == null ? '' :
                                        orders.map((order) => {
                                            return ( 
                                                order.orderStatus.name !=='ORDER_SHIPPED' ? '' : 
                                                <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.products.map((product => {
                                                    return (<p key={product.id}>{product.name} , Quantity : {product.quantity}</p>)
                                                }))}</td>

                                                <td>${order.totalPrice}</td>
                                                <td className="text-success">Delivered</td>

                                                <td>{order.statusUpdateAt}</td>

                                                
                                            </tr>
                                                
                                             
                                            )
                                        })
                                }

                            </tbody>}
                    </table>




                </div>
            </div>
        </div>

    )
}
export default OrderContainer
