
const singleClassDetails = async (req, res) => {

    try {
        const id = req.params.id;
        const classDetails = await ClassModel.findById(id);

        res.status(200).send({ success: true, message: "Class fetched successfully", data: classDetails });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}

module.exports = singleClassDetails