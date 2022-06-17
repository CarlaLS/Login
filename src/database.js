const mongoose = require('mongoose')




mongoose.connect(process.env.MONGODB_ATLAS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
})

    .then (db => console.log ('Base de datos esta conectada'))
    .catch(err=> console.log (err));

