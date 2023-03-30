//importing mongoose
const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
//server connection
mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log('MongoDB Connection successfull!!');
})

//model creation

const Product= mongoose.model('Product',{
       
        id: Number,
        title: String,
        price:Number,
        description: String,
        category: String,
        image: String,
        rating: {
          rate: Number,
          count: Number
        }
      }
)
//to store wishlist
const Wishlist= mongoose.model('Wishlist',{
       
        id: Number,
        title: String,
        price:Number,
        description: String,
        category: String,
        image: String,
        rating: {
          rate: Number,
          count: Number
        }
      }
)
module.exports={
  Product,
  Wishlist
}