import Payment from "../models/Payment.js";

//create new payment
export const createPayment = async (req, resp) => {
  const newPayment = new Payment(req.body);

  try {
    const savedPayment = await newPayment.save();
    resp.status(200).json({
      success: true,
      message: "your tour is booking",
      data: savedPayment,
    });
  } catch (error) {
    resp.status(500).json({ success: true, message: "internal server error" });
  }
};

//get all payment
export const getAllPayment = async (req, resp) => {
  try {
    const pays = await Payment.find();
    resp.status(200).json({
      success: true,
      message: "successful",
      data: pays,
    });
  } catch (error) {
    resp.status(500).json({ success: true, message: "internal server error" });
  }
};
