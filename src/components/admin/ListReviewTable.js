import React from 'react'
import { api } from '../../services/API'

function ListReviewTable(props) {

    const { reviews, type} = props
    //const type =  typeof data === 'undefined' ? '': data.type 

    const approve = (id) => {
        // api.put("/review/app/" + id)
        //     .then(res => {
        //         console.log(res.status)
        //     })
        //     .catch(err => console.log(err.getMessage()));
    }

    const disapprove = (id) => {
        // api.put("/review/dis/" + id)
        // .then(res => {
        //     console.log(res.status)
        // })
        // .catch(err => console.log(err.getMessage()));
    }

    const[active, inactive] = ['approved', 'not-approved']
    return (
        <div>
            <table className="table table-hover table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Review</th>
                        <th scope="col">Rating </th>
                        <th scope="col"> Status </th>
                        {type =='1' ? 
                        <th scope="col">Options</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews == null ? '' :
                            reviews.map((review) => {
                                return (
                                    <tr key={review.id}>
                                        <td>{review.id}</td>
                                        <td>{review.title} </td>
                                        <td>{review.content}</td>
                                        <td>{review.status ? active:inactive}</td>
                                        <td>{review.rating}</td>

                                       {type =='1' ? <td>
                                            <div className="button-group">
                                                <button className='btn btn-success' onClick={() => approve(review.id)}>Approve</button> &nbsp;&nbsp;
                                                <button className='btn btn-warning' onClick={() => disapprove(review.id)}>Disapprove</button>
                                            </div>
                                        </td> : ''}
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListReviewTable
