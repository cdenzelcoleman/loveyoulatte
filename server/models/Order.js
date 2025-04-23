import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  items: [{ productId: String, qty: Number }],
  total: Number,
  paid: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
