import express from 'express';
import cors from 'cors';

import { router as usersRouter } from './routes/usersRouter';
import { connectToServer } from './db'


const app = express();
app.use(cors());
app.use(express.json());
connectToServer();

app.get('/', (_req, res) => {
    res.send('hello there');
});

app.use('/users', usersRouter);

app.listen(4000, () => {
    console.log('listening on port 4000');
});
