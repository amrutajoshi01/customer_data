import React, { Component } from 'react';
import { connect } from "react-redux";
import { registerRequest } from "../../actions/registerActions";
import { withRouter } from 'react-router-dom';
import "./styles.css"
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: '',
            error: {}
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let error = {};

        if (name === "password") {
            if (value.length < 8) {
                error["password"] = "Password must be at least 8 characters";
            }
            else
                error["password"] = ''
        }

        if (name === "confirm") {
            if (this.state.password !== value) {
                error["confirm"] = "Password not matching";

            }
            else
                error["confirm"] = ''
        }

        this.setState({
            [name]: value,
            error: error
        })
    }

    handleValidation = () => {
        let error = {};
        let formIsValid = true;
        let { name, password, confirm, email } = this.state;
        if (!this.state.name) {
            formIsValid = false;
            error["name"] = "Name must not be empty";
        }
        else if (typeof name !== "undefined") {
            if (!this.state.name.match(/^[ a-zA-Z]+$/)) {
                formIsValid = false;
                error["name"] = "Please enter only letters";
            }
        }

        if (!password) {
            formIsValid = false;
            error["password"] = "Password cannot be empty";
        }
        else if (password.length < 8) {
            formIsValid = false;
            error["password"] = "Password must be at least 8 characters";
        }
        else if (password !== confirm) {
            formIsValid = false;
            error["confirm"] = "Password not matching";
        }

        if (!email) {
            formIsValid = false;
            error["email"] = "Email cannot be empty";
        }
        else if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                error["email"] = "Email is not valid";
            }
        }

        this.setState({ error: error });
        return formIsValid;
    }

    register = (event) => {
        event.preventDefault();
        let { name, email, password } = this.state;
        if (this.handleValidation()) {
            const data = {
                // name: name,
                email: email,
                password: password
            }
            this.props.register(data);
            this.props.history.push("/upload");
        }
        console.log()
    }

    render() {
        let { name, email, password, confirm, error } = this.state;
        return (
            <div >
                <h2>Register</h2>
                <div id="register">
                    <label htmlFor="name" className="FormFields label">Full Name</label>
                    <input type="text" id="name" className="FormFields" placeholder="Enter your name" name="name" value={name} onChange={this.handleChange} />
                    <span style={{ color: "red" }}><br />{error["name"]}</span>

                    <label htmlFor="email" className="FormFields label">E-Mail Address</label>
                    <input type="email" id="email" className="FormFields" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange} />
                    <span style={{ color: "red" }}><br />{error["email"]}</span>

                    <label htmlFor="password" className="FormFields label">Password</label>
                    <input type="password" id="password" className="FormFields" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} />
                    <span style={{ color: "red" }}><br />{error["password"]}</span>

                    <label htmlFor="confirm" className="FormFields label">Confirm Password</label>
                    <input type="password" id="confirm" className="FormFields" placeholder="Confirm Password" name="confirm" value={confirm} onChange={this.handleChange} />
                    <span style={{ color: "red" }}><br />{error["confirm"]}</span>
                    <button className="FormFields submit" onClick={this.register}>Register</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.register.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) => { dispatch(registerRequest(data)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));