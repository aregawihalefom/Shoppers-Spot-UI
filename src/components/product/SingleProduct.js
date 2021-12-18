import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate } from "react-router-dom";
import { storeageUtil } from '../../store/localStorage/local'
import { APP_CONFIG } from '../../services/Constants'
import { addingItem } from '../../store/Redux/CartReducers'
import store from '../../store/Redux/store'

function SingleProduct(props) {
    const { product } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const role = storeageUtil.getItem(APP_CONFIG.data.ROLE) ||''


    const addToCart = (product) => {

        let stored = []

        // Read
        let read = storeageUtil.getItem(APP_CONFIG.data.CART_DATA);

        stored = read === null ? stored : read

        // check if the item already exist
        const isInCart = productIsInCart(product, stored)

        // update quantity
        if (isInCart) {
            stored.map((prod) => {
                if (prod.id == product.id) {
                    prod.quantity += + 1;
                }
                return prod
            })
        } else {
            // append
            product.quantity = 1
            stored = [...stored, product]

        }

        // save back
        storeageUtil.setItem(APP_CONFIG.data.CART_DATA, stored)

        // save to global state too
        dispatch(addingItem(stored))

    }

    const productIsInCart = (product, cart) => {
        var i;
        for (i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id) {
                return true;
            }
        }

        return false;
    }
    const addToWishList = (product) => {
        console.log("adding to wish")
    }

    const showDetails = (id) => {
        navigate('/shop/products/detail/'+id)
  
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={product.banner} onClick={()=>showDetails(product.id)} className="card-img-top" alt="..."></img>
                <span className="badge bg-success position-absolute mt-2 ml-2">New</span>
                <div className="card-body"><h6 className="card-subtitle mb-2">
                    <a className="text-decoration-none" href="/product/detail">{product.name}</a>
                </h6><div className="my-2">
                        <span className="font-weight-bold h5">${product.price}</span>
                    </div>
                </div>
               {
                   role !== '' && role =='ROLE_BUYER' ?  <div className="btn-group" role="group" aria-label="Basic example">
                   <button type="button" className="btn btn-primary" onClick={() => addToCart(product)}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                           <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                           <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                       </svg>
                   </button>
                   <button type="button" className="btn btn-secondary" onClick={() => addToWishList(product)}>

                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                           <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                       </svg></button>
               </div> : ''
               }
            </div>
        </div>
    )
}

export default SingleProduct


