import React from 'react'

function SellerListTable(props) {

    const {data} = props
    const sellers = typeof data === 'undefined' ? [] : data.seller
    const type =  typeof data === 'undefined' ? '': data.type 

    return (
        <div>
            <table className="table table-hover table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total Products</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers == null ? '' :
                                sellers.map((seller) => {
                                        return (
                                            <tr key={seller.id}>
                                                <td>{seller.firstName } {"  "} {seller.middleName} {"  "} {seller.lastName}</td>
                                                <td>{seller.email}</td>
                                                <td>total</td>
                                                <td>Others</td>
                                                <td>
                                                    <div className="button-group">
                                                        <button className='btn btn-success' >Details</button> &nbsp;&nbsp;

                                                        <button className='btn btn-primary' >Edit</button> &nbsp;&nbsp;

                                                        <button className='btn btn-warning' >Delete</button>
                                                    </div>
                                                </td>
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
