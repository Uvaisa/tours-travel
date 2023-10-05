import Admin from "../models/Admin.js";

export const createAdmin = async (req, resp) => {
  const newAdmin = new Admin(req.body);
  try {
    const savedAdmin = await newAdmin.save();
    resp.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedAdmin,
    });
  } catch (err) {
    resp.status(500).json({ success: true, message: "successfully created" });
  }
};
//get single admin by id
export const getSingleAdmin = async (req, resp) => {
  const id = req.params.id;
  try {
    const admin = await Admin.findById(id);
    resp.status(200).json({
      success: true,
      message: "Successfully found",
      data: admin,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "failed to find" });
  }
};
