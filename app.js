const express = require('express');
const bodyParser = require('body-parser');
const bmiCalculator = require('bmi-calc'); 
const https = require('https');
const app = express();
const port = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
});


app.post('/bmicalculator', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    
    if (!isNaN(weight) && !isNaN(height)) {
        const bmi = weight / (height * height);
        res.send('Your BMI is: ' + bmi.toFixed(2)); 
    } else {
        res.status(400).send('Invalid input'); 
    }


    res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log("Server OK");
});
