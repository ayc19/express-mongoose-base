import express from 'express';

import { router as usersRouter } from './routes/usersRouter';

const app = express();

app.get('/', (_req, res) => {
    res.send('hello there');
});

app.use('/users', usersRouter);

app.listen(4000, () => {
    console.log('listening on port 4000');
});
