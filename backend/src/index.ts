// Rest API server - 

import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// API endpoint -
app.get('/api/test', async (req: Request, res: Response) => {
    res.json({message: 'Hello from express endpoint!'})
});

app.listen(7777, () => {
    console.log('Server is running on localhost:7777')
});