const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  uploadDocument,
  getDocuments,
  updateStatus,
  downloadDocument
} = require('../controllers/documentController');

const router = express.Router();

// Use memoryStorage to hold files in memory
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('application/') || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Please upload a document or image file.'));
    }
  }
});

// ✅ Routes

// POST Upload document
router.post('/upload', upload.single('file'), uploadDocument);

// GET All documents
router.get('/', getDocuments);

// PUT Update document status
router.put('/:id', updateStatus);

// GET Download document by ID
router.get('/:id/download', downloadDocument);

module.exports = router;
