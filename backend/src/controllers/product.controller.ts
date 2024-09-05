import { Request, Response } from 'express';
import Product from '../database/models/product.model';
import { Op } from 'sequelize';
import cloudinary from '../config/cloudinary.config';
import upload from '../config/multer.config'; 
import { addProductSchema, updateProductSchema, getSpecificProductSchema } from '../validators/product.validator';

// Controller to add a new product
export const addProduct = async (req: Request, res: Response) => {
  upload.single('video')(req, res, async (err: any) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { error } = addProductSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const {
      name,
      description,
      price,
      imageUrl,
      quantity,
      userId,
      shopId,
      isAvailable,
      noOfSales,
    } = req.body;

    let videoUploadUrl = null;

    try {
      // Handle video upload to Cloudinary if a file is included
      if (req.file) {
        const uploadResponse = await cloudinary.v2.uploader.upload(req.file.path, {
          resource_type: 'video',
        });
        videoUploadUrl = uploadResponse.secure_url;
      }

      const product = await Product.create({
        name,
        description,
        price,
        imageUrl,
        videoUrl: videoUploadUrl,
        quantity,
        userId,
        shopId,
        isAvailable,
        noOfSales: noOfSales || 0,
      });

      res.status(201).json({ message: 'Product created successfully', product });
    } catch (err) {
      console.error('Error adding product:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
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

// Controller to get a specific product
export const getSpecificProduct = async (req: Request, res: Response) => {
  // Validation Error
  const validationResult = getSpecificProductSchema.validate(req.params.id);
  if (validationResult.error)
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message, data: null });

  try {
    const productID = req.params.id;
    // Verify product exists
    const product = await Product.findByPk(productID);
    if (!product)
      return res
        .status(400)
        .json({ message: 'Product ID does not exist', data: null });

    
    const shopInfo = await product.getTShop();

    return res
      .status(200)
      .json({ message: 'Found product', data: { product, shopInfo } });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);

      return res.status(500).json({
        message: 'Failed to get specific product',
        data: null,
      });
    }
  }
};

// Ensure all controllers are exported
export default {
  addProduct,
  getAllProducts,
  getTrendingSales,
  getProductById,
  updateProduct,
  deleteProduct,
  getSpecificProduct,
};
