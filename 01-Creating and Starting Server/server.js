const express = require('express')

const app = express() // server instance created, getting stored in a variable

app.get("/", (req, res) => { 
    res.send('Love Love')   
})

// req (request) -> to access the data which comes from frontend
// res (response) -> to send the data from backend to frontend 

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.listen(3000) // server started, 3000 is port number