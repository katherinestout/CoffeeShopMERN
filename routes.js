const express = require('express');
const router = express.Router();

const Coffee = require('./models/Coffee');


//test
router.get('/', (req, res) => {
    res.send("coffee time!");
});

//get all
router.get('/coffees/all', (req, res) => {
    Coffee.find()
    .then(coffees => res.json(coffees))
    .catch(err => res.status(404).json({nocoffeeforyou: 'no coffee for you'})); 
});

//add 
router.post('/coffees/post', (req, res) => {
    Coffee.create(req.body)
    .then(coffee => res.send(coffee))
    .catch(err => res.status(404).json({postrejected: "something went wrong"}) 
     );
});

//delete 
router.delete('/coffees/:id', (req, res) => {
    Coffee.findByIdAndDelete({_id: req.params.id})
    .then(coffee => res.send(coffee))
    .catch(err => console.log(err) );
 });
    


//surprise 
router.put('/coffees/surprise/:id', (req, res) => {
    Coffee.findByIdAndUpdate({_id: req.params.id}, 
        {"coffeetype": "Coffee and Code"}).then(() => {
        Coffee.findOne({_id: req.params.id})
        .then((coffee) => {
            res.send(coffee);
        });
    });
});

module.exports = router;