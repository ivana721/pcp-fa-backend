import Interview from "../models/Interview.js";

export const createInterview = async (req, res) => {
  try {
    const interview = await Interview.create(req.body);

    res.status(201).json({
      success: true,
      data: interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();

    res.json({
      success: true,
      data: interviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findOne({
      interviewId: req.params.id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.json({
      success: true,
      data: interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findOneAndUpdate(
      { interviewId: req.params.id },
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      data: interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};