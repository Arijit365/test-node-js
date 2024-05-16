const express = require('express');
const dotenv = require('dotenv');
const ip = require('ip');
const cors = require('cors');
const app = express();
const fs = require('fs');
const CreateUserRoutes = require('./routes/user.routes');
const { date } = require('joi');


dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors({origin:'*'}));

// Middleware
app.use(express.urlencoded({extended:false}));

// Save the request logging time in a file
app.use((req,res,next)=>{
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} - ${req.ip} : ${req.method} : ${req.url}\n `,
    (err,data)=>{
        next();
    }
  );
});

app.get("/apis", (req,res)=>{
    res.json({
        success:1,
        message:"This API is working"
    })
});

// Create User API 
app.use('/api/v1/',CreateUserRoutes);


app.listen(PORT , ()=>{
    console.log(`The server is started on the ${ip.address()}:${PORT}`);
})
