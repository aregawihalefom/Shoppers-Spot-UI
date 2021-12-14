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

    const handleChangeEvent = (key, value) => {
        setProduct({
            ...product,
            [key]: value,
        });
        console.log(product)
    }

    const showDetails = (params) => {
        console.log("edit")
    }

    const submitEdit = async () => {
        var message = ''
        setProduct({...product, id:id})
        const result = await api.put("/products/"+id, product)
        if (result.status === 200) {
            message = { success: 'Product udpated successfully ', error: '', category: true }
            dispatch(setMessages(message))
            navigate("/sellers/products")
        } else {
            const message = { success: '', error: "Error occured: " + result.status, category: false }
            dispatch(setMessages(message))
        }
    }

    const creatForm = ()=>{
        <div className="card">
        <div className="card-body">
            <h5 className="card-title text-center text-primary text-uppercase">Add Product for Sell </h5>
            <hr />
            <div className="form-group mt-3">
                <label htmlFor="productName">Product Name</label>
                <input type="input" className="form-control mt-2" id="productName" aria-describedby="productNameHelp"
                    placeholder="Enter product name"
                    onChange={(e) => handleChangeEvent("name", e.target.value)} 
                    value={product.name}
                />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="productDescription" className="form-label">Product Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={(e) => handleChangeEvent("description", e.target.value)}
                    value={product.description}

                ></textarea>
            </div>

            <div className="form-group mt-3">
                <label htmlFor="sku">SKU</label>
                <input type="input" className="form-control mt-2" id="sku" aria-describedby="skuHelp" placeholder="Enter SKU"
                    value={product.sku}
                    onChange={(e) => handleChangeEvent("sku", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="price">Price(Unit Price)</label>
                <input type="input" className="form-control mt-2" id="price" aria-describedby="priceHelp" placeholder="Enter price"
                    value={product.price}
                    onChange={(e) => handleChangeEvent("price", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="quantity">Quantity</label>
                <input type="input" className="form-control mt-2" id="quantity" aria-describedby="quantity" placeholder="Enter quantity" 
                
                value = {product.quantity}

                onChange={(e) => handleChangeEvent("quantity", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="banner">Banner URL</label>
                <input type="input" className="form-control mt-2" id="banner" aria-describedby="banner" placeholder="enter banner url" 
                
                value = {product.banner}

                onChange={(e) => handleChangeEvent("banner", e.target.value)} />
            </div>

            <button className="btn btn-primary mt-md-3" onClick={submitEdit}>Save Changes</button>
        </div>
    </div>
    }

    return (
        <div>
            <div className="row ">
                <hr />
                <div className="col-4">

                </div>
                <div className="col-4">
                    {creatForm}
                </div>
            </div>
        </div>

    )
}
export default EditProduct
