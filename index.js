//importing server
const express= require('express')

const dataService=require('./Services/dataservice')
//importing cors
const cors = require('cors')

//creating server aplication
const server=express()

//linking front end and server
server.use(cors({
    origin:'http://localhost:4200'
}))

//parse json data
server.use(express.json())

//server port creation
server.listen(3000,()=>{
    console.log('Cart server is listening at port number 3000');
})

//api requests
//all products
server.get('/all-products',(req,res)=>{
    dataService.allProducts().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//view products
server.get('/view-products/:productId',(req,res)=>{
    dataService.viewProduct(req.params.productId).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//wishlist
server.post('/add-to-wishlist',(req,res)=>{
    dataService.addtowishlist(req.body).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/get-wishlist',(req,res)=>{
    dataService.getWishlist().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//remove-item-wishlist-api
server.delete('/remove-item-wishlist/:productId',(req,res)=>{
    dataService.deleteItemWishlist(req.params.productId).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})