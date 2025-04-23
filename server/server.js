import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err))

app.listen(process.env.PORT || 5000, () => 
    console.log(`Server is running on port`, process.env.PORT || 4000));