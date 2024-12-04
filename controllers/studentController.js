import studentModel from "../models/studentModel.js";
export const createStudent = async (req, res) => {
  const { id, IDCard, name, email, phone, classId } = req.body;

  try {
    const newStudent = new studentModel({
      id,
      IDCard,
      name,
      email,
      phone,
      classId,
    });

    await newStudent.save();
    return res.status(201).json({ student: newStudent });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Create student ot kert" });
  }
};
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const studentDetail = await studentModel.findOne({ id }); 
    if (!studentDetail) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({ student: studentDetail });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Failed to fetch student" });
  }
};

export const updateById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const { id, IDCard, name, email, phone, classId } = req.body;
  
        if (!id && !IDCard && !name && !email && !phone && !classId) {
          return res.status(400).json({
            error: 'At least one of id IDCard and name and email must be provided to update the student',
          });
        }
    
        const studentModel = await studentModel.findOne({ id: studentId });
    
        if (!studentModel) {
          return res.status(404).json({ message: 'student not found' });
        }
    
        
        if (id) studentModel.id = id;
        if (IDCard) studentModel.IDCard = IDCard;
        if (name) studentModel.name = name;
        if (email) studentModel.email = email;
        if (phone) studentModel.phone = phone;
        if (classId) studentModel.classId = classId;
    
        await studentModel.save();
    
        res.status(200).json({
          message: 'student updated successfully',
          studentModel,
        });
      } catch (error) {
        console.error('Error updating student:', error.message);
        res.status(500).json({
          message: 'Failed to update student',
          error: error.message,
        });
      }
    };
