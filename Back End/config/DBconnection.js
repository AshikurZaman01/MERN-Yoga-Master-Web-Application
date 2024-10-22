
const mongoose = require('mongoose')

const DBConnection = async () => {
    try {

        await mongoose.connect(process.env.MONGO_CONNECT_URL)
            .then(() => {
                console.log('Connected to database')
            })
            .catch((err) => {
                console.log(err)
            })

    } catch (error) {
        console.log(error)
    }
}


module.exports = DBConnection;