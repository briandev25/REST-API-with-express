const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) =>{
    res.status(200).json({
        message:"Handling products GET requests"
    })
})

router.post('/',(req,res,next) =>{
    const product = {
        name:req.body.name,
        price:req.body.price
    }
    res.status(201).json({
        message:"Handling products  POST requests",
        createdProduct:product
    })
})
router.get('/:productId',(req,res,next) =>{
    const id = parseInt(req.params.productId);
   if(id <= 10){
       res.status(200).json({
           message:"product found",
           id:id
       })
   }else{
       res.status(400).json({
           error:"product with the id could not be found"
       })
   }
})
router.patch('/',(req,res,next) =>{
    res.status(200).json({
        message:"Update a product"
    })
})

router.delete('/',(req,res,next) =>{
    res.status(200).json({
        message:"Deletes a product"
    })
})

module.exports = router;