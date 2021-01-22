const Product = require('../models/Product');

function list(req, res){
    Product.find ({})
        .then(products =>{
            if(products.length) return res.status(200).send({products});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));

}


function create(req, res){
    let product = new Product(req.body);
    product.save().then(products => res.status(201).send({products})).catch(error => res.status(500).send({error}));
}


function remove(){

}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value;
    Product.find(query).then(products =>{
        if(!products.length) return next();
        req.body.products;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}


module.exports= {
    list,
    create,
    find
    
};