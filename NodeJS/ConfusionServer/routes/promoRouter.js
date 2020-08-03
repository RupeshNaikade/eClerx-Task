const express = require('express');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');
const mongoose = require('mongoose');
const Promotions = require('../models/promotions');
const Leaders = require('../models/leaders');

const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.get((req,res,next)=>{
    Promotions.find({})
    .then((promos)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(promos);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform put operation on promotions!");
})
.post(authenticate.verifyUser,(req,res,next)=>{
    Promotions.create(req.body)
    .then((promo) => {
        console.log('Promotion Created ', promo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(authenticate.verifyUser,(req,res,next)=>{
    Promotions.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});


promoRouter.route('/:promoId')
.get((req,res,next)=>{
    Promotions.findById(req.params.promoId)
    .then((promos)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(promos);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=403;
    res.end("cannot perform put operation on promotions!");
})
.post(authenticate.verifyUser,(req,res,next)=>{
    Promotions.create(req.body)
    .then((promo) => {
        console.log('Promotion Created ', promo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(authenticate.verifyUser,(req,res,next)=>{
    Promotions.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));  
});

module.exports=promoRouter;