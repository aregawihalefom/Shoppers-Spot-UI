import React, { useState } from 'react'
import { APP_CONFIG } from '../../services/Constants'
import { storeageUtil } from '../../store/localStorage/local'

function CheckoutContainer() {


    const handleChangeEvent = (params) => {

    }

    const addShippingAddress = () => {

    }

    const addBillingAddress = () => {

    }

    const submitOrder = () => {

    }

    let counter = 0
    let cartData = storeageUtil.getItem(APP_CONFIG.data.CART_DATA)
    counter = cartData == null ? counter : cartData.length

    const [useShippingAsBilling, setShippingAsBilling] = useState(false);
    const handleUseShippingAsBilling = () => {
        setShippingAsBilling((val) => !val)
        console.log(useShippingAsBilling)
    }

    const [billingState, setBillingState] = useState({})
    const [shippingState, setShippingState] = useState({})

    const handleShippingForm = (key, value) => {
        setShippingState({
            ...shippingState,
            [key]: value,
        });
    }

    const handleBillingForm = (key, value) => {
        setBillingState({
            ...billingState,
            [key]: value,
        });
    }



    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary text-uppercase">Shipping Address </h5>
                        <hr />
                        <div className="form-group mt-3">
                            <label htmlFor="address1">Address 1</label>
                            <input type="input" className="form-control mt-2" id="address1" aria-describedby="address1Help" placeholder="Enter street" onChange={(e) => handleChangeEvent("address1", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="address1">Address 2</label>
                            <input type="input" className="form-control mt-2" id="address2" aria-describedby="address2Help" placeholder="Apt, Blg .." onChange={(e) => handleChangeEvent("address2", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="city">City</label>
                            <input type="input" className="form-control mt-2" id="city" aria-describedby="cityHelp" placeholder="Enter city" onChange={(e) => handleChangeEvent("city", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="state">State</label>
                            <input type="input" className="form-control mt-2" id="state" aria-describedby="stateHelp" placeholder="Enter state" onChange={(e) => handleChangeEvent("state", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="zip">Zip </label>
                            <input type="input" className="form-control mt-2" id="zip" aria-describedby="zip" placeholder="Enter zip code" onChange={(e) => handleChangeEvent("zip", e.target.value)} />
                        </div>
                        <hr />
                        <h5 className="card-title text-center text-primary text-uppercase">Billing Address </h5>
                        <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"   onChange={handleUseShippingAsBilling}/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Use Shipping address as billing address
                            </label>
                        </div>
                        {
                         useShippingAsBilling ? '': 
                         <div>
                             <hr />
                             <div className="form-group mt-3">
                                 <label htmlFor="address1">Address 1</label>
                                 <input type="input" className="form-control mt-2" id="address1" aria-describedby="address1Help" placeholder="Enter street" onChange={(e) => handleChangeEvent("address1", e.target.value)} />
                             </div>
             
                             <div className="form-group mt-3">
                                 <label htmlFor="address1">Address 2</label>
                                 <input type="input" className="form-control mt-2" id="address2" aria-describedby="address2Help" placeholder="Apt, Blg .." onChange={(e) => handleChangeEvent("address2", e.target.value)} />
                             </div>
             
                             <div className="form-group mt-3">
                                 <label htmlFor="city">City</label>
                                 <input type="input" className="form-control mt-2" id="city" aria-describedby="cityHelp" placeholder="Enter city" onChange={(e) => handleChangeEvent("city", e.target.value)} />
                             </div>
             
                             <div className="form-group mt-3">
                                 <label htmlFor="state">State</label>
                                 <input type="input" className="form-control mt-2" id="state" aria-describedby="stateHelp" placeholder="Enter state" onChange={(e) => handleChangeEvent("state", e.target.value)} />
                             </div>
             
                             <div className="form-group mt-3">
                                 <label htmlFor="zip">Zip </label>
                                 <input type="input" className="form-control mt-2" id="zip" aria-describedby="zip" placeholder="Enter zip code" onChange={(e) => handleChangeEvent("zip", e.target.value)} />
                             </div>
             
                         </div>

                        }
                        <button className="btn btn-primary mt-md-3" onClick={submitOrder}>Place order</button>

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary text-uppercase">Inside your cart </h5>
                        <hr />
                        {
                            counter == 0 ? 'Your cart is empty' : <div>
                                {cartData.map((product) =>
                                    <div key={product.id}>
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">Quantity : {product.quantity}</p>
                                        <p className="card-text">Price : {product.price}</p>
                                        <hr />
                                    </div>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckoutContainer
