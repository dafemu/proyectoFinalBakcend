import { Schema, model } from 'mongoose';

const productsSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  code: {type: String, required: true},
  thumbnail: {type: String, required: true},
  price: {type: Number, required: true, default: 0},
  quantity: {type: Number, default: 0},
  timestamp: {type: String, required: true},
  stock: {type: Number, required: true, default: 0}
});

export const Item = model('Item', productsSchema);
