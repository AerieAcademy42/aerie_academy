// controllers/contactController.js
const Contact = require('../models/Contact');

// @desc    Create new contact form submission
// @route   POST /api/contact
// @access  Public
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }
    
    // Check if contact with email already exists
    const existingContact = await Contact.findOne({ email });
    
    // If contact exists, update their information
    if (existingContact) {
      existingContact.name = name;
      existingContact.phone = phone;
      existingContact.updatedAt = Date.now();
      
      await existingContact.save();
      
      return res.status(200).json({
        success: true,
        message: 'Your information has been updated successfully',
        isExisting: true
      });
    }
    
    // Create new contact entry if doesn't exist
    const newContact = new Contact({
      name,
      email,
      phone
    });
    
    // Save to database
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your information has been submitted successfully',
      isExisting: false
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Check if contact with email already exists
// @route   GET /api/contact/check-email
// @access  Public
exports.checkEmailExists = async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email parameter is required'
      });
    }
    
    // Check if contact with this email exists
    const existingContact = await Contact.findOne({ email });
    
    res.status(200).json({
      success: true,
      exists: !!existingContact
    });
    
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

exports.getContacts = async (req, res) => {
  console.log("Hello");
  try {
    // Get all contacts, sorted by newest first
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });
    
    // Return all contacts
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Add more controller methods as needed