const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const Schema=mongoose.Schema;





// edited --> start
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile_num:{
        type:String,
        required:true,
        unique:true
    },
  
   

    

});
  /*  Items:[
        {
           type: Schema.Types.ObjectId,
           ref:'Item'

        }
           ]  */

    /*  room_number:{
        type:Number,
        required:true,
        unique:false
    },
    hostel_number:{
        type:Number,
        required:true,
        unique:false
    } */       
// edited-->end

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model('User',userSchema);




/* user  */
// mobile number
//room number
//hostel number
//products

/* product */


//  name
//category
//owner



