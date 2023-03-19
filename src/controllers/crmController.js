import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body);
    let contact = await newContact.save();
    res.json(contact);
}

export const getContacts = async (req, res) => {
    let contacts = await Contact.find({});
    res.json(contacts);
}