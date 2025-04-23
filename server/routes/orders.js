import express, { Router } from 'express';
import Order from '../models/Order';

router.post('/', async (req, res) => {
    const orders = await Order.find().sort('-createdAt');
    res.json(orders);
});

export default router;