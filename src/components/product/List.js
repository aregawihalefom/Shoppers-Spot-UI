import React from 'react'
import {useState, useEffect} from 'react'
import FilterPrice from "../filter/Price";
import FilterCategory from "../filter/Category";
import SingleProduct from "./SingleProduct";
import { api } from '../../services/API';
import { storeageUtil } from '../../store/localStorage/local';

function ProductListView() {

  let [data, setData] = useState([])

  useEffect(() => {
   
    api.setHeader(storeageUtil.getItem('token'))
    api.get("/products")
    .then(result=>{
      setData(result.data)
    })

  }, [])

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
            <div className="row">
              {
                data.map((product)=>{
                  return( <SingleProduct  key = {product.id} product = {product}/>
                )})
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductListView
