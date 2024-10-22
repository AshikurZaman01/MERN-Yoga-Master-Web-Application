const mongoose = require('mongoose');
const ClassModel = require("../../Models/classModel/classModel");

const newClass = async (req, res) => {
    try {
        const { name, image, videoLink, availableSeats, price, description, instructorName, instructorEmail, status, submitted, reason } = req.body;

        // Validate required fields
        if (!name || !image || !videoLink || !availableSeats || !price || !description || !instructorName || !instructorEmail) {
            return res.status(400).send("All fields are required");
        }

        // Create a new class instance
        const newClas = new ClassModel({
            name,
            image,
            videoLink,
            availableSeats: parseInt(availableSeats),
            price: parseInt(price),
            description,
            instructorName,
            instructorEmail,
            status,
            submitted,
            reason
        });

        // Save the class to the database
        await newClas.save();
        res.status(201).send({ success: true, message: "Class created successfully", data: newClas });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = newClass;
