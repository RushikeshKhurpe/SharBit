// const express=require('express');

// const Item=require('../models/Item');
// const catchAsync = require("../utils/catchAsync.js");
// const ExpressError=require('../utils/ExpressError.js');
// const methodOverride = require("method-override");
// const {itemSchema}=require('../schemas.js');
// const {storage}=require('../cloudinary');
// const {isLoggedIn,validateCampground,isAuthor}=require('../middleware');
// const multer  = require('multer');
// const upload = multer({storage});

// const router=express.Router();




// new code
const express=require('express');
const router=express.Router();
const User=require('../models/user');
const catchAsync=require('../utils/catchAsync');
const passport=require('passport');
const Item=require('../models/Item');
// const {itemSchema}=require('../schemas.js');


const {isLoggedIn,isAuthor}=require('../middleware');
const methodOverride = require("method-override");

const ExpressError=require('../utils/ExpressError.js');


router.get('/new',async(req,res)=>{

    res.render('items/new.ejs');
    
})


router.get('/electronic',async(req,res)=>{
 
  res.render('items/electronic.ejs');

})


router.get('/generalStuff',async(req,res)=>{

  res.render('items/generalStuff.ejs');
  
})

router.get('/studyMaterial',async(req,res)=>{

  res.render('items/studyMaterial.ejs');

})

router.get('/medicine',async(req,res)=>{

  res.render('items/medicine.ejs');


})

router.post('/',isLoggedIn, catchAsync(async(req,res)=>{
 
      const {item_name, category}=req.body.item;
      const item = new Item({item_name,category});
      item.owner=req.user._id;
      await item.save();
     
   
      req.flash('success','Successfully made a new item');
      // res.redirect(`/items/${item._id}`);
      res.redirect('/items/medicine');
  
}))






router.get('/medicine/catalog/:id',async(req,res)=>{
  
  const {id}=req.params;
  const foundItem=await Item.find({item_name:id}).populate('owner');
   
  res.render('items/catalog.ejs',{foundItem});


})



router.get('/electronic/catalog/:id',async(req,res)=>{
  
 
   const {id}=req.params;
   const foundItem=await Item.find({item_name:id}).populate('owner');
   
   res.render('items/catalog.ejs',{foundItem});


})



module.exports=router;