const express = require('express');
const bodyParser = require('body-parser');
const bmiCalculator = require('bmi-calc'); // Replace with the actual package name

const app = express();
const port = 3000; // Change this to your desired port number

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET route to serve the HTML form
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/public/bmiCalculator.html');
});

// POST route to handle form submission
app.post('/bmicalculator', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    // Calculate BMI using your chosen package
    const bmi = bmiCalculator.bmiCalculator(weight, height); // Replace with the actual calculation function
    

    // Send the BMI result back to the client
    res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});