import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getCustomersRequest } from '../../actions/customerActions';
import Loader from '../../components/Loader';
import './styles.css';
class Customers extends Component {

    componentDidMount = () => {
        this.props.getCustomers();
    }

    render() {
        let { customers, loading } = this.props;
        let displayContent;
        if (loading)
            displayContent = <Loader />
        else
            displayContent = <div id="customersData">
                <div className="customer">
                    <p className="customerDetails">Customer Id</p>
                    <p className="customerDetails">Name</p>
                    <p className="customerDetails">Email</p>
                </div>
                {
                    customers.map(customer => (
                        <div className="customer" key={customer.id}>
                            <p className="customerDetails">{customer.id}</p>
                            <p className="customerDetails">{customer.name}</p>
                            <p className="customerDetails">{customer.email}</p>
                        </div>
                    ))
                }
            </div>
        return (displayContent);
    }
}
const mapStateToProps = (state) => {
    return {
        customers: state.customer.customers,
        loading: state.customer.loading,
        error: state.customer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => { dispatch(getCustomersRequest()) }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers));