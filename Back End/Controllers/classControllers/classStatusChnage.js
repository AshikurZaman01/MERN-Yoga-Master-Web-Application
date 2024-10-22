const ClassModel = require("../../Models/classModel/classModel");

const classStatusChange = async (req, res) => {
    try {
        const id = req.params.id; // Accessing ID from URL parameters
        const status = req.body.status; // Status still comes from the body

        // Check if the provided status is valid
        const validStatuses = ['approved', 'rejected', 'pending'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status provided" });
        }

        // Find the class by ID
        const findClass = await ClassModel.findById(id);

        if (!findClass) {
            return res.status(404).json({ success: false, message: "Class not found" });
        }

        // Update the class status
        findClass.status = status;
        await findClass.save();

        res.status(200).json({ success: true, message: "Class status updated successfully", data: findClass });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

module.exports = classStatusChange;
