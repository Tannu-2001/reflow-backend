
import mongoose from "mongoose";
import Project from "../models/Project.js";

// GET /api/projects
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

// GET /api/projects/:id  (id ya slug dono chalenge)
export const getProject = async (req, res, next) => {
  try {
    // route me path "/:id" hai, isliye yahan id hi lo
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Project id is required" });
    }

    let project;

    // agar valid Mongo ObjectId hai to _id se search karo
    if (mongoose.Types.ObjectId.isValid(id)) {
      project = await Project.findById(id);
    } else {
      // warna slug se try karo
      project = await Project.findOne({ slug: id });
    }

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    next(err);
  }
};

// POST /api/projects
export const createProject = async (req, res, next) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

