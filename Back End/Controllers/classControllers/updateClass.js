const ClassModel = require("../../Models/classModel/classModel");

const updateClass = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the class by ID
        const classToUpdate = await ClassModel.findById(id);
        if (!classToUpdate) {
            return res.status(404).send({ success: false, message: "Class not found" });
        }

        // Update the class with new data
        const updatedClass = await ClassModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        res.status(200).send({ success: true, message: "Class updated successfully", data: updatedClass });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

module.exports = updateClass;
