import mongoose from "mongoose";
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
    },
  },
  { strict: false }
);
export default mongoose.model("admins", adminSchema);
