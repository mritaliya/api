const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: { type: String,
    required: true, },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("product", productSchema);
