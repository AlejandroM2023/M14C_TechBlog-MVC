const router = require('express').Router();

//require models

//home route
router.get('/', (req,res) => {
    
});

 

//will display all posts by single user //view will have the partial to comment
router.get('/posts/user/:username', (req,res) => {
    
});

//will display single post //view will have the partial to comment
router.get('/posts/:id', (req,res) => {
    
});

//will display the log in pay //should redirect you if you are already logged in
router.get('/login', (req,res) => {
    
});

module.exports = router;