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

<<<<<<< HEAD
const router = express.Router();

// Use memoryStorage to hold files in memory
=======
const router = express.Router(); // ✅ Declare router BEFORE using it

// Multer config: use memory storage
>>>>>>> 7586bf7 (updated new-folder)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
<<<<<<< HEAD
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('application/') || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Please upload a document or image file.'));
    }
  }
=======
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit per file
>>>>>>> 7586bf7 (updated new-folder)
});

// ✅ Routes

<<<<<<< HEAD
// POST Upload document
router.post('/upload', upload.single('file'), uploadDocument);

// GET All documents
router.get('/', getDocuments);

// PUT Update document status
router.put('/:id', updateStatus);

// GET Download document by ID
router.get('/:id/download', downloadDocument);

module.exports = router;
=======
// POST: Upload documents
router.post('/upload', upload.array('documents', 10), uploadDocument);

// GET: All documents
router.get('/', getDocuments);

// PUT: Update status
router.put('/:id', updateStatus);

// GET: Download document by ID & file
router.get('/:id/download', downloadDocument); // ✅ Works with ?type=x&file=filename.pdf

module.exports = router; // ✅ Only export ONCE
>>>>>>> 7586bf7 (updated new-folder)
