const express = require("express"); //Express 
const path = require("path"); //To Perform manipulations on folders & files
const http = require("http");
const cors = require("cors");
const { routesInit } = require("./routes/config_routes"); // import routesInit() 
require("./db/mongoConnect"); // Links the mongo to app
require('dotenv').config()
const fileUpload = require("express-fileupload"); // Upload files


const app = express(); // app of express        
app.use(cors()) // cors between the defrent client

app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 1024 * 1024 * 5 }
}))

app.use(express.json({ limits: "15mb" }));


// app of jsons
// app.use(express.static(path.join(__dirname, "public")));
// the public directory is always accessible 
app.use(express.static(path.join(__dirname, "public/")));

routesInit(app);


const server = http.createServer(app);
let port = process.env.PORT || 3020;
server.listen(port); 