const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tanveer:tanveer@cluster0.jpspo.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true }).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err)); 

var conn =mongoose.Collection;
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  os: {
    type: String,
    required: true
  },
  points: {
    type: String,
    required: true
  }
});

// Create collection and add schema
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;