// index.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authroute.js'; // 🔁 Must include `.js` extension
import profilerouter from './routes/profiteroute.js'; // 🔁 Must include `.js` extension
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profilerouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 