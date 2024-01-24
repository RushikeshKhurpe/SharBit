const mongoose=require('mongoose');
const User=require('./user');
const Schema=mongoose.Schema;


const itemSchema=new Schema(
    {
        item_name:{
            type:String,
            required:true
            
        },
       
        category:{
            type:String,
            required:true
        },
        
        owner:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }


    }
);

/*
 images:[{
            url:String,
            filename:String
        }],
*/
module.exports=mongoose.model('Item',itemSchema);