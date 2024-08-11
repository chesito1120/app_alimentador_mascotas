const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
require('dotenv').config(); // Asegúrate de cargar las variables de entorno

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));