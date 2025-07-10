import React, { useState } from 'react';

function App() {
  const [emails, setEmails] = useState([{ value: '', isValid: true }]);

  const handleAddEmail = () => {
    setEmails([...emails, { value: '', isValid: true }]);
  };

  const handleChange = (index, event) => {
    const updatedEmails = [...emails];
    const newValue = event.target.value;
    updatedEmails[index].value = newValue;
    updatedEmails[index].isValid = validateEmail(newValue);
    setEmails(updatedEmails);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dynamic Email Form</h2>
      {emails.map((emailObj, index) => (
        <div key={index}>
          <input
            type="email"
            placeholder={`Email ${index + 1}`}
            value={emailObj.value}
            onChange={(e) => handleChange(index, e)}
            style={{
              marginBottom: '5px',
              borderColor: emailObj.isValid ? 'black' : 'red'
            }}
          />
          {!emailObj.isValid && (
            <div style={{ color: 'red', fontSize: '12px' }}>
              Invalid email format
            </div>
          )}
        </div>
      ))}

      <button onClick={handleAddEmail}>Add Email</button>

      <h3>Entered Emails:</h3>
      <ul>
        {emails.map((emailObj, index) => (
          <li key={index}>{emailObj.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
