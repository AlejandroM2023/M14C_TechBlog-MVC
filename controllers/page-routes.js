const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const authenticate = require('../utils/auth');


//require models

//home route
router.get('/', async(req,res) => {
    try {
    const data = await Post.findAll({
        attributes:{ exclude: ['updatedAt']},
        include:[{model: User}],
        order: [['createdAt', 'ASC']]
    })
    const postData = data.map(post => post.get({plain: true}));
    res.render('allPosts', {postData, loggedIn: req.session.loggedIn} );
    }catch(err){
        res.status(500).json(err);
    }
});

 

//will display all posts by the user in their dashboard
router.get('/posts/dashboard', async (req,res) => {
    try{

        const postData = await Post.findAll({
            include: [{model: User}],
            where: {user_id: req.session.userId}
        });
        const posts = postData.map(post => post.get({plain: true}));
        res.render('dashboard', {posts, userName: req.session.userName, loggedIn: req.session.loggedIn});
    }catch(err){
        res.status(500).json(err);
    }
});

//will display single post //view will have the partial to comment
router.get('/posts/:id', authenticate, async (req,res) => {
    try{

        const postData = await Post.findByPk(req.params.id,{
            attributes:{ exclude: ['updatedAt']},
            include:[{model: User}],
            order: [['createdAt', 'ASC']]
        });
        const post = postData.get({plain: true});
        
        const commentData = await Comment.findAll({
            where:{post_id: req.params.id},
            attributes:{ exclude: ['updatedAt']},
            order: [['created_at', 'ASC']]
        });
        const comments = commentData.map(post => post.get({plain: true}));
        res.render('commentSection', {post, comments, loggedIn: req.session.loggedIn});
    }catch(err){
        res.status(500).json(err);
    }
});

//will display the log in pay //should redirect you if you are already logged in
router.get('/login', (req,res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;