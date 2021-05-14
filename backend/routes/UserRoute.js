import express from 'express';
import UserModel from '../models/UserModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
        // res.status(200).json('user');
    }
    catch (error) {
        res.status(404).json({message: error});
    }
});

export default router;