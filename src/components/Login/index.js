import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { loginRequest } from "../../actions/loginActions";

import './styles.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    dismissError = () => {
        this.setState({ error: '' });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        let { email, password } = this.state;
        evt.preventDefault();
        if (!email) {
            return this.setState({ error: 'Username is required' });
        }
        if (!password) {
            return this.setState({ error: 'Password is required' });
        }

        let data = {
            email: email,
            password: password
        }
        this.props.login(data);
        // this.props.history.push('/customers');
        //return this.setState({ error: 'Invalid Username/Password' });

    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        let { email, password } = this.state;
        return (
            <form className="loginForm" onSubmit={this.handleSubmit} action="/upload">
                <h2>Login</h2>
                {
                    this.state.error &&
                    <h3 className='error' onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
                <label className="FormFields label">Email</label>
                <input type="email" className="FormFields" name="email" value={email}
                    onChange={(event) => this.handleChange(event)} /><br />

                <label className="FormFields label">Password</label>
                <input type="password" className="FormFields" name="password" value={password}
                    onChange={(event) => this.handleChange(event)} /><br />
                <input type="submit" className="FormFields submit" value="Login" />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.login.loading,
        success: state.login.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(loginRequest(data)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));