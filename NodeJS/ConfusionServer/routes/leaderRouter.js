const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("we will send all leaders to you!");
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform put operation on leaders!");
})
.post((req,res,next)=>{
    res.end("we will add leader:"+req.body.name+" with details:"+req.body.description);
})
.delete((req,res,next)=>{
    res.end("delete all leaders!");
});


leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end("we will send details of "+req.params.leaderId+ " to you!");
})
.put((req,res,next)=>{
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform POST operation on leader:"+req.params.leaderId);
})
.delete((req,res,next)=>{
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports=leaderRouter;