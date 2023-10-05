import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, resp) => {
  const newTour = new Tour(req.body);
  console.log(newTour);
  try {
    const savedTour = await newTour.save();
    resp.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    resp.status(500).json({ success: false, message: "Not created" });
  }
};

//update tour
export const updatedTour = async (req, resp) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    resp.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    resp.status(500).json({ success: false, message: "failed to update" });
  }
};

//delete tour by id
export const deleteTour = async (req, resp) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    resp.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    resp.status(500).json({ success: false, message: "failed to delete" });
  }
};

//get single tour by id
export const getSingleTour = async (req, resp) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    resp.status(200).json({
      success: true,
      message: "Successfully found",
      data: tour,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "failed to find" });
  }
};

//get all tour
export const getAllTour = async (req, resp) => {
  const page = parseInt(req.query.page); // for pagination

  try {
    const tours = await Tour.find({}).populate("reviews");
    // .skip(page * 8) //it will show only 8 element on page 1
    // .limit(8);
    resp.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully found",
      data: tours,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "failed to find" });
  }
};

//get tour by search
export const getTourBySearch = async (req, resp) => {
  //here i means case sensitive

  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    resp.status(200).json({
      success: true,
      message: "Successfully ",
      data: tours,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "not found" });
  }
};

//get featured tour
export const getFeaturedTour = async (req, resp) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    resp.status(200).json({
      success: true,

      message: "Successfully found",
      data: tours,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "failed to find" });
  }
};

//get tour by COunt
export const getTourCount = async (req, resp) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    resp.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    resp.status(500).json({ success: false, message: "failed to fetch" });
  }
};
