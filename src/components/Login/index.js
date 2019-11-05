import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { loginRequest } from "../../actions/loginActions";

import './styles.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    dismissError = () => {
        this.setState({ error: '' });
    }

    handleSubmit = (evt) => {
        let { username, password } = this.state;
        evt.preventDefault();
        if (!username) {
            return this.setState({ error: 'Username is required' });
        }
        if (!password) {
            return this.setState({ error: 'Password is required' });
        }

        let data = {
            username: username,
            password: password
        }
        this.props.login(data);
        if (this.props.success) {
            this.props.history.push('/upload');
        }
        else {
            return this.setState({ error: 'Invalid Username/Password' });
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                {
                    this.state.error &&
                    <h3 className='error' onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
                <label className="FormFields label">Username</label>
                <input type="text" className="FormFields" name="username" value={this.state.username}
                    onChange={(event) => this.handleChange(event)} /><br />

                <label className="FormFields label">Password</label>
                <input type="password" className="FormFields" name="password" value={this.state.password}
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