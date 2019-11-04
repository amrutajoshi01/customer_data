import React, { Component } from 'react';
import './styles.css'
class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            toggleUpload: 'EnterDetails'
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    toggleMenu = (event) => {
        let name = event.target.name;
        this.setState({
            toggleUpload: name
        });
    }

    render() {
        let { name, email, toggleUpload } = this.state;
        let display;
        if (toggleUpload === "EnterDetails")
            display = <form id="uploadCustomers">
                <label>Customer Details</label>
                <label htmlFor="name" className="FormFields label">Name: </label>
                <input type="text" id="name" className="FormFields" placeholder="Enter your name" name="name" value={name} onChange={this.handleChange} />
                <label htmlFor="email" className="FormFields label">E-Mail Address: </label>
                <input type="email" id="email" className="FormFields" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange} />
                <button className="submit">Register</button>
            </form>
        else
            display = <form id="uploadCustomers">
                <input type="file" />
                <button className="submit">Register</button>
            </form>

        return (
            <div className="upload">
                <button name="EnterDetails" className="uploadMenu" onClick={(event) => this.toggleMenu(event)}>Enter Details</button>
                <button name="UploadDetails" className="uploadMenu" onClick={(event) => this.toggleMenu(event)}>Upload Details</button>
                {display}
            </div>
        );
    }
}

export default Upload;