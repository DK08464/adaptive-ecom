// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('API Running...');
});

app.get('/api/endpoint', (req, res) => {
  res.json({ message: 'API Endpoint reached successfully!' });
});

const axios = require('axios');
app.post('/api/generate-content', async (req, res) => {
    const { prompt } = req.body;
  
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt,
        max_tokens: 100
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error generating content' });
    }
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
