// backend/routes/emergencyRoutes.js

import express from 'express';
import {
  createContact,
  getUserContacts,
  updateContact,
  deleteContact
} from '../controllers/emergencyContactController.js'; // ✅ lowercase



const router = express.Router();

router.post('/', createContact);
router.get('/:userId', getUserContacts);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
