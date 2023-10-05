import Booking from "../models/Booking.js";

//create new Booking
export const createBooking = async (req, resp) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    resp.status(200).json({
      success: true,
      message: "your tour is booking",
      data: savedBooking,
    });
  } catch (error) {
    resp.status(500).json({ success: true, message: "internal server error" });
  }
};

//get Single booking
export const getBooking = async (req, resp) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    resp.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (error) {
    resp.status(404).json({ success: false, message: "not found" });
  }
};

//get all booking
export const getAllBooking = async (req, resp) => {
  try {
    const books = await Booking.find();
    resp.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (error) {
    resp.status(500).json({ success: true, message: "internal server error" });
  }
};
