const express = require('express');
const app = express();
const Person = require("./models/personModel");
const mongoose = require('mongoose');
const port = 3000;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //FOR FORM DATA INPUTS

// GETTING ALL PERSON IN THE DATABASE
app.get('/api', async(req, res) => {
    try {
        const person = await Person.find({});
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// GETTING A SPECIFIC USER IN THE DATABASE
app.get('/api/:user_id', async(req, res) => {
    try {
        // GETTING ID FROM THE PARAMETERS
        const {user_id} = req.params;
        const person = await Person.findById(user_id);
        res.status(200).json(person);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});


// UPDATEING THE PERSON IN THE DATABASE
app.put('/api/:user_id', async(req, res) => {
    try {
        const {user_id} = req.params;
        const person = await Person.findByIdAndUpdate(user_id, req.body);

        // Person Update Validation
        if(!person){
            return res.status(404).json({message: `We cannot find person with the ID ${user_id}`});
        }
        const updatedPerson = await Person.findById(user_id);
        res.status(200).json(updatedPerson);


    } catch (error) {
        res.json(500).json({message: error.message});
    }
});

// DELETING A PERSON FROM THE DATABASE
app.delete('/api/:user_id', async(req, res) => {
    try {
        // GETTING ID FROM THE PARAMETERS
        const {user_id} = req.params;
        const person = await Person.findByIdAndDelete(user_id);
        if(!person){
            return res.status(404).json({message: `We cannot find person with the ID ${user_id}`});
        }

        res.status(200).json({
            message: `Succesfully deleted the person with the ID ${user_id}`,
            person
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// CREATING A PERSON IN THE DATABASE
app.post('/api', async(req, res) => {
    try {
        const person = await Person.create(req.body)
        res.status(200).json(person);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});



// MongoDB CONNECTION
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Sever listing at port ${port}`)
    });
  })
  .catch((err) => {
    console.log(err);
  });




