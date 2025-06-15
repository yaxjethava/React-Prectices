import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {
    render() {
        return (
            <>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Customer Data</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-wrap">
                                    <table className="table table-responsive-xl">
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Email</th>
                                                <th>Username</th>
                                                <th>Status</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.data.map((item) => {
                                                // console.log(item)
                                                return (
                                                    <tr className="alert" role="alert">
                                                        <td>
                                                            <label className="checkbox-wrap checkbox-primary">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </td>
                                                        <td className="d-flex align-items-center">
                                                            <div className="img" style={{ backgroundImage:`url(${item.image})` }} />
                                                            <div className="pl-3 email gap-3 d-flex">
                                                                <span>{item.email}</span>
                                                                <span>Added: {item.added}</span>
                                                            </div>
                                                        </td>
                                                        <td>{item.username}</td>
                                                        <td className="status">
                                                            {
                                                            (item.status=="Active") ? <span className="active">{item.status}</span> :<span className="waiting">{item.status}</span>
                                                            }</td>
                                                        <td>
                                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true"><i className="fa fa-close" /></span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                   

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
