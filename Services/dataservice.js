const db=require('./db')
//all-products
const allProducts=()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No data is present"
                }
                    
            }
        }
    )
}
const viewProduct=(id)=>{
    return db.Product.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                product:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"Product unavailable"
            }
               
        }
    })
}
//add to wishlist
const addtowishlist=(product)=>{
    return db.Wishlist.findOne({
        id:product.id
    }).then(result=>{
        if(result){
            return{
                statusCode:401,
                message:"Product already in wishlist"
            }
        }
        else{
            let newProduct=new db.Wishlist({
       
                id: product.id,
                title: product.title,
                price:product.price,
                description: product.description,
                category: product.category,
                image: product.image,
                rating: {
                  rate:product.rating.rate,
                  count: product.rating.count
                }
              })
              newProduct.save()
              return{
                statusCode:200,
                message:"Product added to wishlist"
              }
            
        }
    })

}
//getWishlist
const getWishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    wishlist:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Wishlist is empty"
                }
                    
            }
        }
    )

}
//delete item from wishlist
const deleteItemWishlist=(id)=>{
    return db.Wishlist.deleteOne({id}).then((result)=>{
        if(result){
            //if delete successful then get the updated wishlist
            return db.Wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            statusCode:200,
                            wishlist:result
                        }
                    }
                    else{
                        return{
                            statusCode:404,
                            message:"Wishlist is empty"
                        }
                            
                    }
                }
            )
            
        }
        else{
            return{
                statusCode:404,
                message:"Product not found"
            }
        }
    })
}
module.exports={
    allProducts,
    viewProduct,
 addtowishlist,
 getWishlist,
 deleteItemWishlist

}