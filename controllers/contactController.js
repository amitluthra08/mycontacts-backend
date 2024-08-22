const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all Contacts
//@route GET /api/contacts/
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});

//@desc Create Contact
//@route POST /api/contacts/
//@access public
const createContact = async (req, res) => {
    // console.log("🚀 ~ createContact ~ req.body:", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contact);
}

//@desc Get a Contact
//@route GET /api/contacts/:id
//@access public
const getContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json({ message: `Get contact of ${req.params.id}` });
}

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact);
}

//@desc Delete Contact
//@route DELETE /api/contacts/
//@access public
const deleteContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };