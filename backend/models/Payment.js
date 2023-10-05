import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  cardHname: {
    type: String,
    required: true,
  },

  cardNumber: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  cvc: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("payment", paymentSchema);
