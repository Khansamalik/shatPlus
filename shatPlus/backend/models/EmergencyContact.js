import mongoose from 'mongoose';

const emergencyContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  bloodGroup: { type: String },
  medicalHistory: { type: String },
  additionalComments: { type: String },
  preferredHospital: { type: String },
  preferredAmbulance: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true  // ✅ Add this only if a userId must be present
  },
}, {
  timestamps: true
});

export default mongoose.model('EmergencyContact', emergencyContactSchema);
