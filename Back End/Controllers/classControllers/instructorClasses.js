const ClassModel = require("../../Models/classModel/classModel");

const instructorClasses = async (req, res) => {
    try {

        const email = req.params.email;

        const classes = await ClassModel.find({ instructorEmail: email }).sort({ createdAt: -1 });

        res.status(200).send({ success: true, message: "Classes fetched successfully", data: classes });

    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
}
module.exports = instructorClasses;