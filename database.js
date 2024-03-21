const mongoose = require('mongoose')

const db = () => {
    mongoose.connect(process.env.DB_URL,)
        .then((data) => console.log(`mongodb is connected ${data.connection.host}`))
        .catch((error) => console.log(error))
}
module.exports = db