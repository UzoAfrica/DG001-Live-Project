import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Product from '../database/models/product.model';
import {
  addProductSchema,
  updateProductSchema,
} from '../validators/product.validator';

// Obinna's cloudinary
import cloudinary from '../config/cloudinary';

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
    category,
    color,
  } = req.body;

  try {
    const videoUploadUrl = null;
    const imageUploadUrls: string[] = [];

    // Upload image to cloudinary and get the upload url
    const result = await cloudinary.uploader.upload(req.file!.path);
    imageUploadUrls.push(result.secure_url);

    const product = await Product.create({
      name,
      description,
      price,
      imageUrl: imageUploadUrls,
      video: videoUploadUrl,
      quantity,
      userId,
      MyShopId: shopId,
      isAvailable,
      category,
      color,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryConditions = {} as Record<string, any>;

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

// Ensure all controllers are exported
export default {
  addProduct,
  getAllProducts,
  getTrendingSales,
  getProductById,
  updateProduct,
  deleteProduct,
};
