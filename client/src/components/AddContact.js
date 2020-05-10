import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/actions';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'


class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact :{            
                name: "",   
                email: "",
                phone: ""
            },
            isAdded : false
        }
        this.initialstate = this.state
    }
    handleChange = (e) => {
        this.setState({...this.state, contact : {...this.state.contact,[e.target.id]: e.target.value} } )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.contact)
        this.setState({...this.initialstate , isAdded : true})
    }

    render() {
        const {name,email,phone} = this.state.contact
        return (
        <div>
            <h1 className='display-1 text-center my-5'>Add contact</h1>
            <form className="contact-form mx-auto" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" value={name} placeholder="Name..." id="name" onChange={this.handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Email:</label>
                    <input type="email" className="form-control" value={email} placeholder="E-mail Adress..." id="email" onChange={this.handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" className="form-control" value={phone} placeholder="Phone Number..." id="phone" onChange={this.handleChange} required/>
                </div>
                <div className="text-center mt-5">
                    <button type="submit" className="btn btn-success btn-lg mx-2">Add</button>
                    <Link to="/" className="btn btn-dark btn-lg mx-2">Return</Link>
                </div>
                <Alert className='mt-5' variant='success' show={this.state.isAdded} onClose={()=>this.setState({...this.state, isAdded : false})} dismissible>
                    Contact added
                </Alert>
            </form>
        </div>
        )
    }
}
export default connect(null,{addContact})(AddContact)