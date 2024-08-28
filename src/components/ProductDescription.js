// src/components/ProductDescription.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDescription = ({ productId }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await axios.post('/api/generate-content', {
          prompt: `Generate a detailed description for product ID: ${productId}`
        });
        setDescription(response.data.choices[0].text);
      } catch (error) {
        console.error('Error fetching product description:', error);
      }
    };

    fetchDescription();
  }, [productId]);

  return (
    <div>
      <h2>Product Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
