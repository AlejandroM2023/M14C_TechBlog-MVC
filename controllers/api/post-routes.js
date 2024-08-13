const router = require('express').Router();
const {Comment} = require('../../models');
//import models

router.post('/', (req,res) => {

});

router.post('/addcomment', (req,res) => {
    req.body.author = req.session.userName;
    console.log(req.body);
    res.status(200).json({message: 'thanks for the comment'});
});

module.exports = router;