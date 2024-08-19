//@desc Get all Contacts
//@route GET /api/contacts/
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
}

//@desc Create Contact
//@route POST /api/contacts/
//@access public
const createContact = (req, res) => {
    console.log("🚀 ~ createContact ~ req.body:", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw 
    }
    res.status(200).json({ message: 'Create contact' });
}

//@desc Get a Contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact of ${req.params.id}` });
}

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact of ${req.params.id}` });
}

//@desc Delete Contact
//@route DELETE /api/contacts/
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact of ${req.params.id}` });
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };