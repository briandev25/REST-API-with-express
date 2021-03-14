const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"orders were fetched"
    })
})

router.post('/',(req,res,next)=>{
    const order = {
        productId : req.body.productId,
        quantity:req.body.quantity
    }
    res.status(201).json({
        message:"order was created",
        order:order
    })
})

router.get('/:productId',(req,res,next) =>{
    const id = parseInt(req.params.productId);
   if(id <= 10){
       res.status(200).json({
           message:"Order details",
           id:id
       })
   }else{
       res.status(400).json({
           error:"Order could not be found"
       })
   }
})

router.delete('/',(req,res,next) =>{
    res.status(200).json({
        message:"Order deleted"
    })
})


module.exports = router;