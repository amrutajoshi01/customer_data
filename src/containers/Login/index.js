import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { loginRequest } from "../../actions/loginActions";
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import './styles.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            message: '',
            showAlert: true
        };
    }

    closeAlert = () => this.setState({ showAlert: false });

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
    }

    static getDerivedStateFromProps(nextProps) {
        if (!nextProps.loading) {
            if (nextProps.success === true) {
                nextProps.history.push('/customers');
            }
            else {
                return { message: nextProps.error, }
            }
        }
        return null;
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        let { email, password, error, message, showAlert } = this.state;
        const { loading } = this.props;
        return (

            <div className="loginForm">
                {loading && <Loader />}
                {showAlert && message && <Alert text={message} type="error" closeAlert={this.closeAlert} />}
                <h2>Login</h2>
                {
                    <h3 className='error' onClick={this.dismissError}>
                        {error && <button onClick={this.dismissError}>✖</button>}
                        {error}
                    </h3>
                }
                <label className="FormFields label">Email</label>
                <input type="email" className="FormFields" name="email" value={email}
                    onChange={(event) => this.handleChange(event)} /><br />
                <label className="FormFields label">Password</label>
                <input type="password" className="FormFields" name="password" value={password}
                    onChange={(event) => this.handleChange(event)} /><br />
                <button type="submit" className="FormFields submit" value="Login" onClick={this.handleSubmit}>
                    Login
                </button>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.login.loading,
        success: state.login.success,
        error: state.login.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(loginRequest(data)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));