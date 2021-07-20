import mongoose from 'mongoose';

const sellerSchema = {
  name: { String, required: false },
  logo: { String, required: false },
  description: { String, required: false },
  rating: { type: Number, default: 0, required: false },
  numReviews: { type: Number, default: 0, required: false },
}; 

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: false },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: false }, 
    isSeller: { type: Boolean, default: false, required: false },
    seller: { type: sellerSchema, required: false },
  },
  {
    timestamps: true, 
  }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;
