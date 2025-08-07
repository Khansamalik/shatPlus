import EmergencyContact from '../models/EmergencyContact.js';

// Create a new emergency contact
export const createContact = async (req, res) => {
  try {
    const contact = await EmergencyContact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contacts for one user
export const getUserContacts = async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ userId: req.params.userId });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update contact by ID
export const updateContact = async (req, res) => {
  try {
    const contact = await EmergencyContact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete contact by ID
export const deleteContact = async (req, res) => {
  try {
    await EmergencyContact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
