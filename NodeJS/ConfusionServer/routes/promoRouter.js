const express = require('express');
const bodyParser = require('body-parser');

const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("we will send all promotions to you!");
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform put operation on promotions!");
})
.post((req,res,next)=>{
    res.end("we will add promotion:"+req.body.name+" with details:"+req.body.description);
})
.delete((req,res,next)=>{
    res.end("delete all promotions!");
});


promoRouter.route('/:promoId')
.get((req,res,next)=>{
    res.end("we will send details of "+req.params.promoId+ " to you!");
})
.put((req,res,next)=>{
    res.write('Updating the promotion: ' + req.params.promoId + '\n\n');
    res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform POST operation on promotion:"+req.params.promoId);
})
.delete((req,res,next)=>{
    res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports=promoRouter;