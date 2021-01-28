let mongoose=require('mongoose');

const URL = 'mongodb://localhost:27017/myDB';
//const database = 'myDB';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })