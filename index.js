import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';
import userRoutes from './routes/UserRoute.js';
import authRoutes from './routes/AuthRoute.js';

const { Pool } = pkg;
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
app.use(bodyParser.json());

app.use(cors());

app.use(session({
  secret: 'your-secret-key', // Debes cambiar esto a una clave secreta segura
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Cambia a true si estás utilizando HTTPS
}));

app.get('/test', async (req, res) => {
  try {
    const result = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al conectar a la base de datos');
  }
});

app.use('/api',userRoutes)
app.use('/api/auth', authRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
