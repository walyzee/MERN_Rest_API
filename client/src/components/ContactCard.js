import React from 'react'
import { connect } from 'react-redux'
import { deleteContact } from '../actions/actions'
import { Link } from 'react-router-dom'

const ContactCard = props => {
    return (
        <div className="contact card w-25 d-inline-flex bg-light m-2">
            <div className="card-body">
                <h5 className="card-title">{props.content.name}</h5>
                <p>{props.content.email}</p>
                <p>{props.content.phone}</p>
                <Link to={`/contact/${props.content._id}`} className ="btn btn-success mx-2">Edit</Link>
                <button className ="btn btn-danger mx-2" onClick={() => props.deleteContact(props.content._id)}>Delete</button>
            </div>
        </div>
    )
}

export default connect(null, { deleteContact })(ContactCard)