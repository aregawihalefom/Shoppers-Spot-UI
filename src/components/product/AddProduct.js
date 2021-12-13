import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { APP_CONFIG, paymentMethods } from '../../services/Constants'
import { storeageUtil } from '../../store/localStorage/local'
import { setMessages } from '../../store/Redux/MessageReducers'
import {useParams} from 'react-router'


function AddProduct() {

    const [values, setValues] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    useEffect(() => {
        // Get the details from storage
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/products")
            .then((result) => {
                setProducts(result.data)
            })
    }, [])

    const handleChangeEvent = (key, value) => {
        setValues({
            ...values,
            [key]: value,
        });
    }

    const addProduct = async () => {
        console.log(storeageUtil.getItem("id"))
        console.log(storeageUtil.getItem("token"))
        api.setHeader(storeageUtil.getItem("token"))
        const result = await api.post("/users/sellers/"+storeageUtil.getItem("id"), values)
        let message = {}
        if (result.status === 200) {
            storeageUtil.setItem("user", JSON.stringify(result.data))
            message = { success: 'User Successfully registered ', error: '', category: true }
            dispatch(setMessages(message))
            navigate("/")
        } else {
            const message = { success: '', error: "Error occured: " + result.status, category: false }
            dispatch(setMessages(message))
        }
    }

    let params = useParams()
    const id = params.id;

    const editProduct = (id) => {
        navigate('/products/edit/'+id)
    }

    const showDetails = (id) => {

        navigate('/products/details/'+id)
  
    }

    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode((editMode) => !editMode)
        alert(editMode)
    }

    const deleteProduct = (id) => {
        api.delete("/products" + "/" + id)
            .then(response => {
                if (response.status === 200) {
                    setProducts(products.filter((prod) => prod.id !== id))
                }
            })

    }

    const creatForm = <div className="card">
        <div className="card-body">
            <h5 className="card-title text-center text-primary text-uppercase">Add Product for Sell </h5>
            <hr />
            <div className="form-group mt-3">
                <label htmlFor="productName">Product Name</label>
                <input type="input" className="form-control mt-2" id="productName" aria-describedby="productNameHelp" placeholder="Enter product name" onChange={(e) => handleChangeEvent("name", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="productDescription" className="form-label">Product Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => handleChangeEvent("description", e.target.value)}></textarea>
            </div>

            <div className="form-group mt-3">
                <label htmlFor="sku">SKU</label>
                <input type="input" className="form-control mt-2" id="sku" aria-describedby="skuHelp" placeholder="Enter SKU" onChange={(e) => handleChangeEvent("sku", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="price">Price(Unit Price)</label>
                <input type="input" className="form-control mt-2" id="price" aria-describedby="priceHelp" placeholder="Enter price" onChange={(e) => handleChangeEvent("price", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="quantity">Quantity</label>
                <input type="input" className="form-control mt-2" id="quantity" aria-describedby="quantity" placeholder="Enter quantity" onChange={(e) => handleChangeEvent("quantity", e.target.value)} />
            </div>

            <div className="form-group mt-3">
                <label htmlFor="banner">Banner URL</label>
                <input type="input" className="form-control mt-2" id="banner" aria-describedby="banner" placeholder="enter banner url" onChange={(e) => handleChangeEvent("banner", e.target.value)} />
            </div>

            <button className="btn btn-primary mt-md-3" onClick={addProduct}>Add Product</button>
        </div>
    </div>

    return (
        <div>
            <div className="row ">
                <hr />
                <div className="col-8">
                    <table className="table table-hover table-striped table-condensed">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Price</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products == null ? '' :
                                    products.map((product) => {
                                        return (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.sku}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <div className="button-group">
                                                        <button className='btn btn-success' onClick={() => showDetails(product.id)}>Details</button> &nbsp;&nbsp;

                                                        <button className='btn btn-primary' onClick={() => editProduct(product.id)}>Edit</button> &nbsp;&nbsp;

                                                        <button className='btn btn-warning' onClick={() => deleteProduct(product.id)}>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    {creatForm}
                </div>
            </div>
        </div>

    )
}
export default AddProduct
