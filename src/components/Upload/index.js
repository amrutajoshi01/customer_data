import React, { Component } from 'react';
import { connect } from "react-redux";
import { uploadRequest } from "../../actions/uploadActions";
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

    handleSubmit = (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.id === "file") {
            let file = event.target.file.files;
            this.props.upload(file);
        }
        else if (target.id === "data") {
            let data = {
                name: target.name.value,
                email: target.email.value
            }
            this.props.upload(data);
        }
    }

    render() {
        let { name, email, toggleUpload } = this.state;
        let displayForm;
        if (toggleUpload === "EnterDetails")
            displayForm = <form id="data" className="uploadCustomersForm" onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="FormFields label">Name: </label>
                <input type="text" id="name" className="FormFields" placeholder="Customer Name" name="name" value={name} onChange={this.handleChange} />
                <label htmlFor="email" className="FormFields label">E-Mail Address: </label>
                <input type="email" id="email" className="FormFields" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                <button className="submit" >Submit</button>
            </form>
        else
            displayForm = <form id="file" className="uploadCustomersForm" onSubmit={this.handleSubmit}>
                <input type="file" name="file" className="fileUpload" accept=".txt" />
                <button className="submit">Upload</button>
            </form>

        return (
            <div className="upload">
                <h2>Customer Details</h2>
                <button name="EnterDetails" className="uploadMenu" onClick={(event) => this.toggleMenu(event)}>Enter Details</button>
                <button name="UploadDetails" className="uploadMenu" onClick={(event) => this.toggleMenu(event)}>Upload Details</button>
                {displayForm}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.upload.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (data) => { dispatch(uploadRequest(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);