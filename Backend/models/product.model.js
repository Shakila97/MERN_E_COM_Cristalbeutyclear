import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

name: {type: String, required: true},
price: {type: Number, required: true},
description: {type: String, required: true},
image: {type: String, required: true},
category: {type: String, required: true},
countInStock: {type: Number, required: true},
rating: {type: Number, required: true},
numReviews: {type: Number, required: true},

});