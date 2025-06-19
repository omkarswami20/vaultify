import React, { useState } from 'react';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    documentType: 'resume',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    if (!formData.file) {
      setMessage('❗ Please select a file to upload.');
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('docType', formData.documentType);
    data.append('file', formData.file);

    try {
      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Document uploaded successfully!');
        setFormData({
          name: '',
          email: '',
          documentType: 'resume',
          file: null,
        });
        e.target.reset(); // clear file input
      } else {
        setMessage(`❌ Upload failed: ${result.message || 'Server error'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('⚠️ An error occurred while uploading. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 px-6 py-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        📤 Upload Document
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">👤 Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">📧 Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="documentType" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">📂 Document Type</label>
          <select
            id="documentType"
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="resume">Resume</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="pan">PAN Card</option>
            <option value="passport">Passport</option>
            <option value="license">Driving License</option>
            <option value="voterid">Voter ID</option>
            <option value="marksheet">Marksheet</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">📎 Upload File (PDF only)</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Uploading...' : 'Submit'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">{message}</p>
      )}
    </div>
  );
};

export default UploadForm;
