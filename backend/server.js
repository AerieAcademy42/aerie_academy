const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const contactRoutes = require('./routes/contactRoutes');

// Initialize app
const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'https://aerie-academy-tigu.vercel.app',
    'https://gate2026.aerieacademy.com',
    'http://localhost:3000', // Keep this for local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS with options
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Aerie Academy API is running');
});

// CORS preflight for all routes
app.options('*', cors(corsOptions));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});