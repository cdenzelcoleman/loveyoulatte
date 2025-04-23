import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import ordersRouter from './routes/orders.js';

dotenv.config()
const app = express()

// ───── ENABLE CORS ────────────────────────────────────────
app.use(cors({
  origin: 'http://localhost:3000'
}))
// ──────────────────────────────────────────────────────────

// built-in body-parser
app.use(express.json())

// your API routes
app.use('/api/orders', ordersRouter)

// …
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
