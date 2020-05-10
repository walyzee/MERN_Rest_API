const express = require('express');
const app = express();
const connectDB=require('./config/connectDB')

//Middleware
app.use(express.json())

//connect DB
connectDB()

//routes
app.use('/',require('./routes/contact'))

//Run server
const port = process.env.PORT || 5000

app.listen(port, (err) => {
    if (err) throw err
    else console.log(`\nServer is running on port ${port}`)
})