const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter the  product name"]
    },
    description: {
        type: String,
        required: [true, "please enter the product price"]
    },
    price: {
        type: Number,
        required: [true, "Please provide product price"],
        maxLength: [8, 'Price must be less than 8']
    },
    ratings: {
        type: Number,
        default: 0
    },
    image: {
        public_id: {
            type: String,
            required: [true, 'Image Public Id']
        },
        url: {
            type: String,
            required: true
        }
    },
    category: {
        type: String,
        required: [true, "please enter the product category"]
    },
    stock: {
        type: Number,
        default: 1,
        required: [true, "please enter the product stock"]
    },
    numReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: { type: String, required: true },
        ratings: { type: Number, required: true },
        comments: { type: String, required: true }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true})

module.exports=mongoose.model("Product",productschema)