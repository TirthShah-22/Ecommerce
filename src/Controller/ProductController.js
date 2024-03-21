const { default: mongoose } = require('mongoose');
const Product = require('../Model/Productmodel')
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product })
    }
    catch (err) {
        res.status(400).json({ error: err })
    }
}


exports.getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({
        products
    })
}

exports.updateProduct = async (req, res, next) => {
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({  message: 'InvalidId' })
    }
    let product = await Product.findById(id)
    if (!product) {
        return res.status(400).json({ message: 'product not found' })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        product
    });

}

exports.deleteProduct = async (req, res) => {
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({  message: 'InvalidId' })
    }
    const product = await Product.findByIdAndDelete(id)
    if (!product) {
        return res.status(400).json({ message: 'product not found' })
    }
    res.status(200).json({
        message: "product deleted"
    })
}

exports.getOneProduct = async (req, res) => {
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: 'InvalidId' })
    }
    const product = await Product.findById(id)
    if (!product) {
        return res.status(400).json({  message: 'product not found' })
    }
    res.status(200).json({
        product
    })
}