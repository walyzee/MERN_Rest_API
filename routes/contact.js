const express = require('express')

const router = express.Router()
const Contact = require('../models/Contact')


//http://localhost:5000/newcontact
//@desc add contact
//@access public
router.post('/newcontact', (req, res) => {
    const {name,email,phone} = req.body
    const newContact = new Contact({
      name,
      email,
      phone
    })
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

//http://localhost:5000/allcontact
//@desc get the contacts list
//@access public
router.get('/allcontacts', (req, res) => {
  Contact
  .find()
  .then(contacts=>res.send(contacts))
  .catch(err=>console.log(err))
})

//http://localhost:5000/contact/id
//@desc get the contact with id
//@access public
router.get('/contact/:id', (req, res) => {
  const {id} = req.params
  Contact
  .findOne({ _id: id })
  .then(contacts=>res.send(contacts))
  .catch(err=>console.log(err))
})

//http://localhost:5000/editcontact/id
//@desc edit the contact with id
//@access public
router.put('/editcontact/:id', (req, res) => {
  const {id} = req.params
  const {name,email,phone}=req.body
    Contact.findOneAndUpdate({ _id: id } , { $set: { name,email,phone }},false)
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

//http://localhost:5000/deletecontact/id
//@desc delete the contact with id
//@access public
router.delete('/deletecontact/:id', (req, res) => {
    const {id} = req.params
    Contact
    .findOneAndDelete({ _id: id }, false)
    .then(contact=>res.send(contact))
    .catch(err=>console.log(err))
})


module.exports = router