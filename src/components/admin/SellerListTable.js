import React from 'react'
import { api } from '../../services/API'

function SellerListTable(props) {

    const { sellers, type} = props
    //const type =  typeof data === 'undefined' ? '': data.type 

    const approve = (id) => {
        api.put("/users/sellers/" + id)
            .then(res => {
                console.log(res.status)
            })
            .catch(err => console.log(err.getMessage()));
    }

    const disapprove = (id) => {
        api.put("/users/sellers/dis/" + id)
        .then(res => {
            console.log(res.status)
        })
        .catch(err => console.log(err.getMessage()));
    }

    const[active, inactive] = ['Active', 'Inactive']
    return (
        <div>
            <table className="table table-hover table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Total Products</th>
                        <th scope="col">Points </th>
                        <th scope="col"> Status </th>
                        {type =='1' ? 
                        <th scope="col">Options</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers == null ? '' :
                            sellers.map((seller) => {
                                return (
                                    <tr key={seller.id}>
                                        <td>{seller.id}</td>
                                        <td>{seller.firstName} {"  "} {seller.middleName} {"  "} {seller.lastName}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.products.length}</td>
                                        <td>{seller.points}</td>
                                        <td>{seller.enabled ? active:inactive}</td>
                                       {type =='1' ? <td>
                                            <div className="button-group">
                                                <button className='btn btn-success' onClick={() => approve(seller.id)}>Approve</button> &nbsp;&nbsp;
                                                <button className='btn btn-warning' onClick={() => disapprove(seller.id)}>Disapprove</button>
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

export default SellerListTable
