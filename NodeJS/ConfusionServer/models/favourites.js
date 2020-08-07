const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var FavouriteSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    dishes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Dish"
        }
    ]
})

const Favourite=mongoose.model("favourite",FavouriteSchema);
module.exports=Favourite;