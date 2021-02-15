const mongoose = require('mongoose');

const dbConnect = () => {
        mongoose
    .connect('mongodb+srv://Swap:VdvpXYrRcWGfQlqb@cluster0.mfdal.mongodb.net/test',{
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    })
    .then(()=> console.log('Db connected'))
    .catch(err => console.log(err));
} 

module.exports = dbConnect;