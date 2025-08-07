import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true,
    unique:true
  },
  contact: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true    
  },
  password: {
    type: String
  },
  isPremium: {
    type: Boolean,
    default: false
  }  
});

// ✅ Export using `export default`
const User = mongoose.model('User', userSchema);
export default User;
