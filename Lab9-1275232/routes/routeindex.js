
const express = require('express');
const router = express.Router();
//const Task = require('../model/task');
const Post = require('../views/model/post')


router.get('/', async function(req,res){
  let posts = Post.find()
    console.log(posts)
    res.render('index',{posts})
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPosts', async (req,res) =>{
  let post = new Post(req.body)
  await post.save()
  res.redirect('/')
});
  
router.get('/edit/:id', async(req,res)=>{
  let id  = req.params.id
  let post = await Post.findById(id)
  res.render('edit',{post})
});


router.post('/edit/:id', async (req,res) =>{

  
  await Post.updateOne({_id:req.params.id},req.body)

  await Post.save()
  res.redirect("/")
});

router.post('/delete/:id', async (req,res) =>{
  let id = req.params.id
  await Post.remove({_id:id})
  res.redirect("/")
});


router.get('/delete/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)

  res.render('delete',{post});
});



module.exports = router;