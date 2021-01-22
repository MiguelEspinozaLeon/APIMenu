const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/', ProductCtrl.list);
Router.post('/', ProductCtrl.create);
       


module.exports =  Router;