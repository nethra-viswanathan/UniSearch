import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import model from './model/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

mongoose.connect('mongodb://localhost:27017/UniSearch');

export default app;