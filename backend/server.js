const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); // Cargar variables de entorno antes de usar cualquier variable de entorno

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));