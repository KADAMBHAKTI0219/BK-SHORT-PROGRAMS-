import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditQuote = () => {
  const { id } = useParams();
  const initialData = {
    quote: '',
    author: '',
    image: '',
    whichQuote: '',
  }
  const [formData, setFormData] = useState(initialData);

  // Fetch existing quote data when the component mounts
  useEffect(() => {
    const getSingleData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:5000/quotes/${id}`);
        setFormData(response.data); // Populate the form with current quote data
      } catch (error) {
        console.error('Error fetching quote data:', error);
      }
    };
    
    getSingleData(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // PUT request to update the quote
    axios
      .put(`http://localhost:5000/quotes/${id}`, formData)
      .then((response) => (
        setFormData(response.data),
        setFormData(initialData)
      ))
      .catch((error) => {
        console.error('There was an error updating the quote:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quote">Edit Quote:</label>
        <input
          type="text"
          id="quote"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="author">Edit Author Name:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="image">Edit Image URL:</label>
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

        <button type="submit">Update Quote</button>
      </form>
    </div>
  );
};

export default EditQuote;
