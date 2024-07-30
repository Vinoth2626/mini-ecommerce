const mongoose = require('mongoose')

const connectDatabased = () =>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('MongoDB connect to host :' + con.connection.host)
    })

};
module.exports = connectDatabased;