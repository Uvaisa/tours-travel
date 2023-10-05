import Booking from "../models/Booking.js";
export const myBooking = async (req, resp) => {
  const userId = req.params.id;
  try {
    const book = await Booking.findById(userId);
    resp.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (error) {
    resp.status(404).json({ success: false, message: "not found" });
  }
};
