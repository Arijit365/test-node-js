const express = require('express');
const dotenv = require('dotenv');
const ip = require('ip');
const cors = require('cors');
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors({origin:'*'}));

app.listen(PORT , ()=>{
    console.log(`The server is started on the ${ip.address()}:${PORT}`);
})
