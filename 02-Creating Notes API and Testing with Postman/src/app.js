// app.js is used to create server

const express = require('express')
const app = express()
app.use(express.json()) // middleware

/*
note = {
    title: basic format
    description: this is a note
}
const notes = [
    {
    title: note 1
    description: this is first note
    },
    {
    title: note 2
    description: this is second note
    },
    ...
]
*/

const notes = []

// POST : Sending data to the server
app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully"
    })
})

// GET : Fetching data from the server
app.get("/notes", (req,res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

// DELETE : Data is available on the server and thats need to be deleted
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: "note deleted successfully"
    })
})


// PATCH : Used to update the data which is already available on the server 
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message: "note updated successfully"
    })
})

module.exports = app