import React, { useState } from 'react';
import axios from 'axios';

const AddQuote = () => {
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    image: '',
    whichQuote: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // POST request to add quote data
    axios
      .post('http://localhost:5000/quotes', formData)
      .then((response) => {
     return setFormData(response.data)
      })
      .catch((error) => {
        console.error('There was an error submitting the form:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quote">Add Quote:</label>
        <input
          type="text"
          id="quote"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="author">Add Author Name:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="imagimageUrl">Add Image URL:</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="whichQuote">Select Which Quote:</label>
        <input
          type="text"
          id="whichQuote"
          name="whichQuote"
          value={formData.whichQuote}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuote;
