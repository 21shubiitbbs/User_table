const express = require("express");
const connectDb=require('./config/db')
const dotenv = require("dotenv").config();
const userRoutes = require('./routes/userRoutes');
connectDb();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`port ${port}`)
})
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use('/api/users', userRoutes);

