const ClassModel = require("../../Models/classModel/classModel");

const getClasses = async (req, res) => {
    try {
        const query = { status: "approved" };

        // Add instructorEmail filter if provided in the query
        if (req.query.instructorEmail) {
            query.instructorEmail = req.query.instructorEmail;
        }

        // Fetch classes based on the query
        const classes = await ClassModel.find(query).sort({ createdAt: -1 });

        res.status(200).send({ success: true, message: "Classes fetched successfully", data: classes });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

module.exports = getClasses;
