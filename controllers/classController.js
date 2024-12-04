import classModel from '../models/classModel.js';

export const createClass = async (req, res) => {
  const { className, roomNumber} = req.body;
  try {
    const newClass = new classModel({
      className,
      roomNumber,
      new: true
    });
    await newClass.save();
    return res.status(201).json({ newClass });
  } catch (error) {
    console.log(error.message);
  }
};

export const getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classDetail = await classModel.findById(id);
    if (!classDetail) {
      return res.status(404).json({ message: "Class not found" });
    }
    return res.status(200).json({ classDetail });
  } catch (error) {
    console.log(error.message);
  }
};
