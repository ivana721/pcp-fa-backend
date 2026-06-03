import Company from "../models/Company.js";

export const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);

    res.status(201).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();

    res.json({
      success: true,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findOne({
      companyId: req.params.id,
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findOneAndUpdate(
      { companyId: req.params.id },
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    await Company.findOneAndDelete({
      companyId: req.params.id,
    });

    res.json({
      success: true,
      message: "Company deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};