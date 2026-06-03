import Application from "../models/Application.js";

export const createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      message: "Operation successful",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let query = {};

    if (req.query.search) {
      query.applicationId = {
        $regex: req.query.search,
        $options: "i",
      };
    }

    const applications = await Application.find(query)
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      message: "Operation successful",
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findOne({
      applicationId: req.params.id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.json({
      success: true,
      message: "Operation successful",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const application = await Application.findOneAndUpdate(
      { applicationId: req.params.id },
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Operation successful",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await Application.findOneAndDelete({
      applicationId: req.params.id,
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