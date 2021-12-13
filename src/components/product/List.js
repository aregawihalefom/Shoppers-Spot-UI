import React from 'react'
import { data } from "../../data";
import useState from 'react'

import FilterPrice from "../filter/Price";
import FilterCategory from "../filter/Category";
import SingleProduct from "./SingleProduct";

function ProductListView() {

  //slet [data, setData] = useState({})

  return (
    <div>
      <div
        className="p-5 bg-primary bs-cover"
        style={{
          backgroundImage: "url(../../images/banner/50-Banner.webp)",
        }}
      >
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">
            T-Shirts
          </span>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">

          <hr />
          <div className="col-md-3">

            <FilterCategory />
            <FilterPrice />

          </div>
          <div className="col-md-9">

            <hr />
            <div className="row g-3">
              <SingleProduct />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductListView
