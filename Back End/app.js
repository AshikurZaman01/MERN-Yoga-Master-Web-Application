const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const DBConnection = require('./config/DBconnection');
const { notFound, defaultErrorHandler } = require('./Middlewear/ErrorHandler/errorHandler');
const app = express();
const port = process.env.PORT


app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello");
});

app.use('/api/class', require('./Routes/classRoutes/classRoutes'));

// Error handling middlewares
app.use(notFound);
app.use(defaultErrorHandler);

// Connecting to the database
DBConnection().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((err) => {
    console.log(err);
})
