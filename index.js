const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send({
        categories: ['vegetarain', 'meat', 'fish', 'dessert']
    })
})

// TODO: Add recipe to database
app.get('/add/:a/', (req, res) => {
    res.send('You Sent:' + req.params.a)
})

// TODO: Fetch all recipes from database

// TODO: Fetch Recipe by id

// TODO: Fetch all recipes by category

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});