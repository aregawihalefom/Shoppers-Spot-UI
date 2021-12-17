import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { api } from '../../services/API'
import { APP_CONFIG } from '../../services/Constants'
import { storeageUtil } from '../../store/localStorage/local'

function CheckoutContainer() {

    const username = storeageUtil.getItem(APP_CONFIG.data.USER_NAME)
    const token = storeageUtil.getItem(APP_CONFIG.data.TOKEN_NAME);


    let counter = 0
    let cartData = storeageUtil.getItem(APP_CONFIG.data.CART_DATA)
    counter = cartData == null ? counter : cartData.length

    const [useShippingAsBilling, setShippingAsBilling] = useState(false);
    const handleUseShippingAsBilling = () => {
        setShippingAsBilling((val) => !val)
    }

    const [billingState, setBillingState] = useState({})
    const [shippingState, setShippingState] = useState({})
    const [cardPaymentState, setCardPaymentState] = useState({})

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
    const handlePaymentCardForm = (key, value) => {
        setCardPaymentState({
            ...cardPaymentState, 
            [key]:value
        });
    }
    
    const navigate = useNavigate()

    const submitOrder = () => {
        setBillingState(useShippingAsBilling ? shippingState : billingState)
        var payload = {billingAddress : billingState , shippingAddress: shippingState , products : cartData, username: username, cardPayment:cardPaymentState}
        api.post("/orders", payload)
        .then(result =>{
           navigate("/shop/orders")
           storeageUtil.removeItem("products")
        })

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
                            <input type="input" className="form-control mt-2" id="address1" aria-describedby="address1Help" placeholder="Enter street" onChange={(e) => handleShippingForm("addressLine1", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="address1">Address 2</label>
                            <input type="input" className="form-control mt-2" id="address2" aria-describedby="address2Help" placeholder="Apt, Blg .." onChange={(e) => handleShippingForm("addressLine2", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="city">City</label>
                            <input type="input" className="form-control mt-2" id="city" aria-describedby="cityHelp" placeholder="Enter city" onChange={(e) => handleShippingForm("city", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="state">State</label>
                            <input type="input" className="form-control mt-2" id="state" aria-describedby="stateHelp" placeholder="Enter state" onChange={(e) => handleShippingForm("state", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="zip">Zip </label>
                            <input type="input" className="form-control mt-2" id="zip" aria-describedby="zip" placeholder="Enter zip code" onChange={(e) => handleShippingForm("zip", e.target.value)} />
                        </div>
                        <hr />
                        <h5 className="card-title text-center text-primary text-uppercase">Billing Address </h5>
                        <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={handleUseShippingAsBilling} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Use Shipping address as billing address
                            </label>
                        </div>
                        {
                            useShippingAsBilling ? '' :
                                <div>
                                    <hr />
                                    <div className="form-group mt-3">
                                        <label htmlFor="address1">Address 1</label>
                                        <input type="input" className="form-control mt-2" id="address1" aria-describedby="address1Help" placeholder="Enter street" onChange={(e) => handleBillingForm("addressLine1", e.target.value)} />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="address1">Address 2</label>
                                        <input type="input" className="form-control mt-2" id="address2" aria-describedby="address2Help" placeholder="Apt, Blg .." onChange={(e) => handleBillingForm("addressLine2", e.target.value)} />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="city">City</label>
                                        <input type="input" className="form-control mt-2" id="city" aria-describedby="cityHelp" placeholder="Enter city" onChange={(e) => handleBillingForm("city", e.target.value)} />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="state">State</label>
                                        <input type="input" className="form-control mt-2" id="state" aria-describedby="stateHelp" placeholder="Enter state" onChange={(e) => handleBillingForm("state", e.target.value)} />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="zip">Zip </label>
                                        <input type="input" className="form-control mt-2" id="zip" aria-describedby="zip" placeholder="Enter zip code" onChange={(e) => handleBillingForm("zipCode", e.target.value)} />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="country">Country </label>
                                        <input type="input" className="form-control mt-2" id="country" aria-describedby="country" placeholder="Enter country" onChange={(e) => handleBillingForm("country", e.target.value)} />
                                    </div>
                                </div>

                        }
                        <hr />
                        <h5 className="card-title text-center text-primary text-uppercase">Payment Details </h5>
                        <hr />
                        <div className="form-group mt-3">
                            <label htmlFor="name">Name on card</label>
                            <input type="input" className="form-control mt-2" id="name" aria-describedby="nameHelp" placeholder="Enter name on card" onChange={(e) => handlePaymentCardForm("nameOnCard", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="number">Number</label>
                            <input type="input" className="form-control mt-2" id="number" aria-describedby="numberHelp" placeholder="Enter your card number" onChange={(e) => handlePaymentCardForm("number", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="month">Expriation Month(MM)</label>
                            <input type="input" className="form-control mt-2" id="month" aria-describedby="monthHelp" placeholder="Enter month(eg. 06)" onChange={(e) => handlePaymentCardForm("expirationMonth", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="year">Expriation Year(YY)</label>
                            <input type="input" className="form-control mt-2" id="year" aria-describedby="yearHelp" placeholder="Enter year( eg. 50)" onChange={(e) => handlePaymentCardForm("expirationYear", e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="cvc">CVC </label>
                            <input type="input" className="form-control mt-2" id="zip" aria-describedby="cvc" placeholder="Enter 3 digit" onChange={(e) => handlePaymentCardForm("cvc", e.target.value)} />
                        </div>
                        <hr/>
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
