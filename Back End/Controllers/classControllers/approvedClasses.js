const ClassModel = require("../../Models/classModel/classModel")

const approvedClasses = async (req, res) => {
    try {
        const query = { status: "approved" }
        const classes = await ClassModel.find(query).sort({ createdAt: -1 })

        res.status(200).send({ success: true, message: "Classes fetched successfully", data: classes })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
}

module.exports = approvedClasses;