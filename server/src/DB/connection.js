const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/CBT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((responce) => {
    console.log(`DB Connected Successfully...${responce}`);
}).catch((error) => {
    console.log(`Error while connecting to DB...${error}`);
})

module.exports = connection;