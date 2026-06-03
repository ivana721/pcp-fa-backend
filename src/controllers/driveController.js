import Drive from "../models/Drive.js";

export const createDrive = async (req, res) => {
  try {
    const drive = await Drive.create(req.body);

    res.status(201).json({
      success: true,
      message: "Operation successful",
      data: drive,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDrives = async (req, res) => {
  try {
    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    if (req.query.company) {
      filter.title = {
        $regex: req.query.company,
        $options: "i",
      };
    }

    const drives = await Drive.find(filter);

    res.json({
      success: true,
      message: "Operation successful",
      data: drives,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDriveById = async (req, res) => {
  try {
    const drive = await Drive.findOne({
      driveId: req.params.id,
    });

    if (!drive) {
      return res.status(404).json({
        success: false,
        message: "Drive not found",
      });
    }

    res.json({
      success: true,
      message: "Operation successful",
      data: drive,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDrive = async (req, res) => {
  try {
    const drive = await Drive.findOneAndUpdate(
      { driveId: req.params.id },
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Operation successful",
      data: drive,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDrive = async (req, res) => {
  try {
    await Drive.findOneAndDelete({
      driveId: req.params.id,
    });

    res.json({
      success: true,
      message: "Operation successful",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};