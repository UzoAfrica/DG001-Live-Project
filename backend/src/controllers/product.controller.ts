import { Request, Response } from 'express';
import Product from '../database/models/product.model';
import { Op } from 'sequelize';
import cloudinary from '../config/cloudinary.config';
import { addProductSchema, reviewSchema, updateProductSchema } from '../validators/product.validator';
import Review from '../database/models/review.model';

// Controller to add a new product
export const addProduct = async (req: Request, res: Response) => {
  const { error } = addProductSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const {
    name,
    description,
    price,
    quantity,
    userId,
    shopId, 
    isAvailable,
    imageUrl
  } = req.body;

  let videoUploadUrl = null;
  let imageUploadUrls: string[] = [];

  try {
    // Ensure req.files is correctly typed
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Handle image uploads to Cloudinary
    if (files && files['image']) {
      const imageUploadPromises = files['image'].map(file =>
        cloudinary.v2.uploader.upload(file.path, { resource_type: 'image' })
      );
      const imageUploadResponses = await Promise.all(imageUploadPromises);
      imageUploadUrls = imageUploadResponses.map(response => response.secure_url);
    }

    // Handle video upload to Cloudinary if a file is included
    if (files && files['video'] && files['video'][0]) {
      const uploadResponse = await cloudinary.v2.uploader.upload(files['video'][0].path, {
        resource_type: 'video',
      });
      videoUploadUrl = uploadResponse.secure_url;
    }

    const product = await Product.create({
      name,
      description,
      price,
      // imageUrl: imageUploadUrls,
      imageUrl,
      video: videoUploadUrl,
      quantity,
      userId,
      MyShopId: shopId,
      isAvailable,
      noOfSales: 0,
    });

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get trending sales products
export const getTrendingSales = async (req: Request, res: Response) => {
  const {
    page = 1,
    limit = 10,
    search,
    category,
    minPrice,
    maxPrice,
    colour,
  } = req.query; 

  const queryConditions: any = {};

  if (search) {
    queryConditions.name = { [Op.like]: `%${search}%` };
  }
  if (category) {
    queryConditions.category = category;
  }
  if (minPrice && maxPrice) {
    queryConditions.price = {
      [Op.between]: [Number(minPrice), Number(maxPrice)],
    };
  } else if (minPrice) {
    queryConditions.price = { [Op.gte]: Number(minPrice) };
  } else if (maxPrice) {
    queryConditions.price = { [Op.lte]: Number(maxPrice) };
  }
  if (colour) {
    queryConditions.colours = { [Op.contains]: [colour] };
  }

  try {
    const products = await Product.findAll({
      where: queryConditions,
      offset: (Number(page) - 1) * Number(limit),
      limit: Number(limit),
    });

    const totalProducts = await Product.count({ where: queryConditions });
    const totalPages = Math.ceil(totalProducts / Number(limit));

    res
      .status(200)
      .json({ products, totalProducts, totalPages, currentPage: Number(page) });
  } catch (err) {
    console.error('Error fetching trending sales products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get a product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update a product by ID
export const updateProduct = async (req: Request, res: Response) => {
  const { error } = updateProductSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update product details
    product.set(req.body);
    await product.save();

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to delete a product by ID
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to add a review for a product
// export const addReview = async (req: Request, res: Response) => {
//   const { error } = reviewSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   const { comment, rating } = req.body;
//   const productId = req.params.id;

//   try {
//     const product = await Product.findByPk(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     const review = await Review.create({
//       comment,
//       rating,
//       ProductId: productId,
//     });

//     res.status(201).json({ message: 'Review added successfully', review });
//   } catch (err) {
//     console.error('Error adding review:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


// Ensure all controllers are exported
export default {
  addProduct,
  getAllProducts,
  getTrendingSales,
  getProductById,
  updateProduct,
  deleteProduct,
};