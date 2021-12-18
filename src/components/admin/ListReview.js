import React, { useState, useEffect } from 'react'
import { api } from '../../services/API'
import { storeageUtil } from '../../store/localStorage/local'
import ListReviewTable from './ListReviewTable';
import SellerListTable from './SellerListTable';


function ListReview() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        // Get the details from storage
        api.setHeader(storeageUtil.getItem("token"))
        api.get("/reviews")
            .then((result) => {
                setReviews(result.data)
            })
    }, [])

    return (
        <div className="mt-4">
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All Reviews</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Pending Reviews</button>
    
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <ListReviewTable reviews={reviews} type="0" />
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        <ListReviewTable reviews={reviews} type="1" />

                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                    </div>
                   
                </div>
            </div>
        </div>

    )
}
export default ListReview
