import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../actions/actions';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
class ContactList extends Component {
    componentDidMount() {
        this.props.getContacts()
    }
    render() {
        return (
            <div className="text-center">
                    <h1 className="display-1 my-5">Contacts List</h1>
                    <div className="card-container">
                        {this.props.contacts.map((el,i) => <ContactCard key={i} content={el}/>)}
                    </div>
                    <Link to="/" className="btn btn-dark btn-lg my-5">Back to Home</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { getContacts })(ContactList)