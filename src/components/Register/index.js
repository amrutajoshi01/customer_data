import React, { Component } from 'react';
import "./styles.css"
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: ''
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        let { name, email, password, confirm } = this.state;

        return (
            <div >
                <h2>Register</h2>
                <form>
                    <div id="register">
                        <label htmlFor="name" className="FormFields label">Full Name</label>
                        <input type="text" id="name" className="FormFields" placeholder="Enter your name" name="name" value={name} onChange={this.handleChange} />

                        <label htmlFor="email" className="FormFields label">E-Mail Address</label>
                        <input type="email" id="email" className="FormFields" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange} />

                        <label htmlFor="password" className="FormFields label">Password</label>
                        <input type="password" id="password" className="FormFields" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} />

                        <label htmlFor="confirm" className="FormFields label">Confirm Password</label>
                        <input type="password" id="confirm" className="FormFields" placeholder="Confirm Password" name="confirm" value={confirm} onChange={this.handleChange} />

                        <button className="submit">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;