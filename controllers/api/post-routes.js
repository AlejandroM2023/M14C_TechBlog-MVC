const router = require('express').Router();
const {Comment,Post} = require('../../models');
//import models

router.post('/', async (req,res) => {
    try{
        req.body.user_id = req.session.userId;
        const response = await Post.create(req.body);
        res.status(200).json({message: 'thanks for the post'});
    }catch(err){
        res.status(400).json(err);
    }
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

router.put('/editpost', async (req,res) => {
    try{
        const response = await Post.update(req.body, {
            where: {
              id: req.body.id
            }
          })
        res.status(200).json({message: 'post updated!'});
    }catch(err){
        res.status(400).json(err);
    }
    
});

module.exports = router;