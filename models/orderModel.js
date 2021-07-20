import mongoose from 'mongoose';
const shippingSchema = {
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
};

const paymentSchema = {
  paymentMethod: { type: String, required: true },
  paymentResult: {
    payerID: { type: String, required: true },
    orderID: { type: String, required: true },
    paymentID: { type: String, required: true },
  }
};

const orderItemSchema = {
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
};

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  itemsPrice: { type: Number },
  taxPrice: { type: Number }, 
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;