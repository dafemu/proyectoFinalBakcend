import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  products: {type: Array, required: true}, 
  userId: { type: String, required: true, max: 100 },
  username: { type: String, required: true, max: 100 },
  direccion: { type: String, required: true, max: 100 },
  timestamp: {type: String, required: true},
  state: {type: String, required: true},
  email: {type: String, required: true},
});

const Order = mongoose.model('orders', orderSchema);
export {Order};