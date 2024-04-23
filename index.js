const express = require('express');
const dotenv = require('dotenv');
const ip = require('ip');
const cors = require('cors');
const app = express();
const CreateUserRoutes = require('./routes/user.routes');

dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors({origin:'*'}));

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
