// src/apiService.js
import axios from 'axios';
import { API_BASE_URL } from './config';

// Example function to get data from the backend
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// // Example fetch request in apiService.js
// fetch('/api/endpoint')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
