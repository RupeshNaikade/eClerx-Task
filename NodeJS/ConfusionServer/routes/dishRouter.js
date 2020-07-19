const express = require('express');
const bodyParser = require('body-parser');

const dishRouter=express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("we will send all dishes to you!");
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform put operation on dishes!");
})
.post((req,res,next)=>{
    res.end("we will add dish:"+req.body.name+" with details:"+req.body.description);
})
.delete((req,res,next)=>{
    res.end("delete all dishes!");
});



dishRouter.route('/:dishId')
.get((req,res,next)=>{
    res.end("we will send details of "+req.params.dishId+ " to you!");
})
.put((req,res,next)=>{
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform POST operation on dish:"+req.params.dishId);
})
.delete((req,res,next)=>{
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports=dishRouter;