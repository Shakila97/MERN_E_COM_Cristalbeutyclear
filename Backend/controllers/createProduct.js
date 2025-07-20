export const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      brand,
      countInStock,
    } = req.body;

    const image = req.file?.filename || "default.jpg";

    const product = new Product({
      title,
      description,
      price,
      category,
      brand,
      countInStock,
      image,
      createdBy: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

