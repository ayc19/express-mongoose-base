import express from 'express';

import * as usersService from '../services/usersService';

export const router = express.Router();

router.post('/', async (req, res) => {
    const newUser = await usersService.createUser();
    res.status(200).json(newUser);
});

router.get('/', async (req, res) => {
    const user = await usersService.getUser();
    res.status(200).json(user);
});
