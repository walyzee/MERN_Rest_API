import { GET_CONTACTS } from '../actions/actionTypes'

const initialState = {
    contacts : []
}

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {...state,contacts :action.payload}
        default:
            return state
    }
}
export default ContactReducer