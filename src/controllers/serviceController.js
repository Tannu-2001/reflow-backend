import mongoose from "mongoose";
import Service from "../models/Service.js";

// GET /api/services
export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.json(services);
  } catch (err) {
    next(err);
  }
};

// GET /api/services/:slug
export const getService = async (req, res, next) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({ message: "Service slug is required" });
    }

    // Slug cannot be ObjectId normally, so direct check
    const service = await Service.findOne({ slug: slug })
    .populate("featuredProjects");

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    next(err);
  }
};

// POST /api/services
export const createService = async (req, res, next) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    next(err);
  }
};

