import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import '../css/Form.css'; // Import the CSS file for styling

const campos = [
  { label: 'Name: ', name: 'name', type: 'text' },
  { label: 'Email: ', name: 'email', type: 'email' },
  { label: 'Age: ', name: 'age', type: 'number' },
  { label: 'Comment: ', name: 'comment', type: 'textarea' },
];

export const Form = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    setSubmittedData(formData);

    // Hide the data after 5 seconds
    setTimeout(() => {
      setSubmittedData(null);
    }, 5000);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <DynamicForm fields={campos} onSubmit={handleSubmit} />

      {/* Display submitted data */}
      {submittedData && (
        <div className="submitted-data-container">
          <h2>Submitted Data:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
