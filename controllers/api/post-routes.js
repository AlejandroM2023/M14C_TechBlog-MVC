const router = require('express').Router();
const {Comment} = require('../../models');
//import models

router.post('/', (req,res) => {

});

router.post('/addcomment', async (req,res) => {
    try{
        req.body.author = req.session.userName;
        const response = await Comment.create(req.body);
        res.status(200).json({message: 'thanks for the comment'});
    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;