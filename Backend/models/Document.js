const mongoose = require('mongoose');

<<<<<<< HEAD
=======
const isPDF = (v) => /\.pdf$/.test(v);

>>>>>>> 7586bf7 (updated new-folder)
const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
    validate: {
<<<<<<< HEAD
      validator: function(v) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: props => `${props.value} is not a valid name. Only letters and spaces are allowed.`
    }
=======
      validator: function (v) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: props => `${props.value} is not a valid name. Only letters and spaces are allowed.`,
    },
>>>>>>> 7586bf7 (updated new-folder)
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
<<<<<<< HEAD
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address.`
    }
  },
  docType: {
    type: String,
    required: true,
    enum: ['aadhar', 'pan', 'passport', 'license', 'resume', 'voterid', 'marksheet', 'other'],
    lowercase: true
  },
  filePath: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\.pdf$/.test(v);
      },
      message: props => `${props.value} is not a valid PDF file path.`
    }
=======
      validator: function (v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address.`,
    },
  },
  documents: {
    aadhar: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    pan: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    passport: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    license: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    resume: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    voterid: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    marksheet: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    bank: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
    other: [{
      type: String,
      validate: {
        validator: isPDF,
        message: props => `${props.value} is not a valid PDF file.`,
      }
    }],
>>>>>>> 7586bf7 (updated new-folder)
  },
  status: {
    type: String,
    default: 'Pending',
<<<<<<< HEAD
    enum: ['Pending', 'Verified', 'Rejected']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
=======
    enum: ['Pending', 'Verified', 'Rejected'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
>>>>>>> 7586bf7 (updated new-folder)
});

module.exports = mongoose.model('Document', documentSchema);
