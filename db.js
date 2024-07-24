const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.dtiyhks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
