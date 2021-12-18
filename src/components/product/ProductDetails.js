


import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { storeageUtil } from '../../store/localStorage/local'
import { useParams } from 'react-router'
import { setMessages } from '../../store/Redux/MessageReducers'
import { APP_CONFIG, paymentMethods } from '../../services/Constants'


function EditProduct() {

    const [product, setProduct] = useState({ id: '', name: '', description: '', sku: '', price: '', quantity: '', banner: '' });
    const params = useParams()
    const id = params.id;
    const userId = storeageUtil.getItem("id")


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({})


    useEffect(() => {
        // Get the details from storage
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/products/" + id)
            .then((result) => {
                setProduct(result.data)
            })
    }, [id])

    const handleChangeEvent = (key, value) => {
        setValues({
            ...values,
            [key]: value,
        });
    }

    const addReview = async () => {
        api.setHeader(storeageUtil.getItem(APP_CONFIG.data.TOKEN_NAME))
        const result = await api.post("/reviews/"+id, values)
        let message = {}
        if (result.status === 200) {
            message = { message: 'Review added successfully Successfully registered ', type: true }
            dispatch(setMessages(message))
            navigate("/")
        } else {
            const message = { message: "Error occured: " + result.status, type: false }
            dispatch(setMessages(message))
        }
    }

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

    const reviewForm = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center text-primary text-uppercase">Add review </h5>
                    <hr />
                    <div className="form-group mt-3">
                        <label htmlFor="review">Review Title</label>
                        <input type="input" className="form-control mt-2" id="review" aria-describedby="review" placeholder="Enter review title" onChange={(e) => handleChangeEvent("title", e.target.value)} />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="productDescription" className="form-label">Review Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => handleChangeEvent("content", e.target.value)}></textarea>
                    </div>

                    <div className="form-group mt-3">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Rating</label>
                            <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => handleChangeEvent("rating", e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-md-3" onClick={addReview}>Add review</button>
                </div>
            </div>
        )

    }

    return (
        <div>
            <div className="row ">
                <hr />
                <div className="col-8">
                    <img className="img-thumbnail img-hover rounded" src={product.banner} alt="banner image" />
                </div>
                <div className="col-4">
                    {creatForm}
                    <hr />
                    {reviewForm()}
                </div>
            </div>
        </div>
    )
}
export default EditProduct
