// index.js
const express = require('express');
const cors = require('cors');
const passwordRoutes = require('./src/routes/passwordRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// index.js
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  }));
app.use(express.json());

app.use('/api/password', passwordRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});