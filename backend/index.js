import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import bookingRoute from "./routes/bookings.js";
import payRoute from "./routes/payment.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import reviewRoute from "./routes/reviews.js";
import adminRoute from "./routes/admin.js";
import myBookingRoute from "./routes/mybooking.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb database connect");
  } catch (error) {
    console.log("mongodb databse connection failed ");
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/view", express.static("public"));
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/payment", payRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/myBooking", myBookingRoute);
app.listen(port, () => {
  connect();
  console.log("server listening", port);
});
