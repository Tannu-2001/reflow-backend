import Contact from "../models/Contact.js"; 
import { sendContactEmail } from "../utils/email.js"; 

export const createContact = async (req, res, next) => {
  try {
    const data = req.body;
    const contact = new Contact({
      name: data.name,
      email: data.email,
      budget: data.budget,
      phone: data.phone,
      message: data.message,
      });

    await contact.save();

    
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
};