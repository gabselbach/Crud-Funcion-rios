const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://gabriellaselbach:root1234@cluster0-aewwe.mongodb.net/CrudFun?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//app.use(cors({
  //  origin: 'https://localhost:2425'
    //}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(2425);