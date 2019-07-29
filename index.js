const express = require('express');
const app = express();
const trends = require("./src/api/trends-route")
const tweets = require("./src/api/tweets-route")
const cors = require("cors");
//cors
app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/trends",trends);
app.use("/tweets",tweets);

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
//Middleware execue:
app.use(logger)

const PORT = process.env.PORT || 8300;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));