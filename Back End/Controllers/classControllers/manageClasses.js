const ClassModel = require("../../Models/classModel/classModel")

const manageClasses = async (req, res) => {
    try {

        const classes = await ClassModel.find({}).sort({ createdAt: -1 });
        res.status(200).send({ success: true, message: "Classes fetched successfully", data: classes });

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = manageClasses;