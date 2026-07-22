const express = require('express')
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())

// notes = {title, description}

/*

CRUD Operations:-

POST /notes => create a note => CREATE
GET /notes => Get all notes => READ
PATCH /notes/:id => Update a note => UPDATE
DELETE /notes/:id => Delete a note => DELETE

*/

app.post("/notes", async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "Note Created Successfully"
    })
})

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find() // returns in form of array

    /* for conditions:
    const notes = await noteModel.findOne({ => just returns one note
        title: "test_3"
    })
    const notes = await noteModel.find({ => return all the notes with matching conditions
        title: "test_2"
    })
    */

    /*
        find : always returns an array of objects or empty array => [{},{},..] or []
        findOne : returns an object or null => {} or null
    */

    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "Note Deleted Successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id: id}, {description: description})
    res.status(200).json({
        message: "Note Updated Successfully"
    })
})

module.exports = app