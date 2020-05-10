const mongoose = require('mongoose')
const config = require('config')

const connectDB = () => {
  mongoose.connect(config.get('MONGOURI'),{ useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false })
  .then(()=> console.log('\nMongoose online'))
  .catch(err=>console.log('Mongoose ERROR'))
}

module.exports = connectDB