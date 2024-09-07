import { Request, Response, RequestHandler } from 'express';
import Shop from '../database/models/my-shop.model';
import User from '../database/models/user.model';
import { uploadImage, uploadVideo, deleteResources } from '../utils/upload';

// Define a custom interface for the Request object to include the user and files properties
interface CustomRequest extends Request {
  user?: {
    id: string;
    isVerified: boolean;
  };
  files?: {
    videos?: Express.Multer.File[];
    images?: Express.Multer.File[];
  };
}

// Create a shop
export const createShop: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const customReq = req as CustomRequest;
  const {
    name,
    isOpen,
    description,
    currency,
    category,
    shopAddress,
    securityFeatures,
    country,
    street,
    state,
    shippingAddress,
    shippingPrices,
    shippingServices,
    zip,
    UserId,
  } = customReq.body;
  const user = customReq.user;

  if (!user) {
    return res.status(403).json({ message: 'You are not allowed Please Re-login' });
  }

  const ownerId = user.id;

  try {
    const userRecord = (await User.findByPk(ownerId)) as InstanceType<typeof User> | null;
    if (!userRecord || !userRecord.getDataValue('isVerified')) {
      return res.status(403).json({ message: 'You are not allowed create a shop Please Re-login.' });
    }

    const videoUrls = customReq.files?.videos
      ? await Promise.all(customReq.files.videos.map(uploadVideo))
      : [];
    const imageUrls = customReq.files?.images
      ? await Promise.all(customReq.files.images.map(uploadImage))
      : [];

    const shop = await Shop.create({
      name,
      isOpen,
      description,
      currency,
      category,
      shopAddress,
      securityFeatures,
      coverImage: imageUrls[0] || null,
      ownerId,
      ratings: 0,
      videoUrls,
      country,
      street,
      state,
      shippingAddress,
      shippingPrices,
      shippingServices,
      zip,
      UserId,
    });

    res.status(201).json({ message: 'Shop created successfully.', shop });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error creating shop:', error);
    res.status(500).json({
      message: 'An error occurred while creating the shop.',
      error: errorMessage,
    });
  }
};


// Update a shop
export const updateShop: RequestHandler = async (
  req: Request,
  res: Response
) => {
  
  const customReq = req as CustomRequest;
  const { id } = customReq.params;
  const {
    name,
    isOpen,
    description,
    currency,
    category,
    shopAddress,
    securityFeatures,
    country,
    street,
    state,
    shippingAddress,
    shippingPrices,
    shippingServices,
    zip,
  } = customReq.body;
  const user = customReq.user;

  if (!user) {
    console.log("not a user");
    return res.status(403).json({ message: 'You are not allowed to create a shop please Re-login.' });
  }

  
  const ownerId = user.id;

  try {
    const shop = (await Shop.findByPk(id)) as InstanceType<typeof Shop> | null;

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found.' });
    }

    if (shop.getDataValue('ownerId') !== ownerId) {
      return res.status(403).json({ message: 'You are not allowed to update this shop.' });
    }

    const videoUrls = customReq.files?.videos
      ? await Promise.all(customReq.files.videos.map(uploadVideo))
      : shop.getDataValue('videoUrls');
    const imageUrls = customReq.files?.images
      ? await Promise.all(customReq.files.images.map(uploadImage))
      : shop.getDataValue('imageUrls');

    await shop.update({
      name,
      isOpen,
      description,
      currency,
      category,
      shopAddress,
      securityFeatures,
      coverImage: imageUrls[0] || shop.getDataValue('coverImage'),
      videoUrls,
      country,
      street,
      state,
      shippingAddress,
      shippingPrices,
      shippingServices,
      zip,
    });

    res.status(200).json({ message: 'Shop updated successfully.', shop });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error updating shop:', error);
    res.status(500).json({
      message: 'An error occurred while updating the shop.',
      error: errorMessage,
    });
  }
};

// Delete a shop
export const deleteShop: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const customReq = req as CustomRequest;
  const { id } = customReq.params;
  const user = customReq.user;

  if (!user) {
    return res.status(403).json({ message: 'User is not authenticated.' });
  }

  const ownerId = user.id;

  try {
    const shop = (await Shop.findByPk(id)) as InstanceType<typeof Shop> | null;

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found.' });
    }

    if (shop.getDataValue('ownerId') !== ownerId) {
      return res.status(403).json({ message: 'Unauthorized to delete this shop.' });
    }

    const videoUrls = shop.getDataValue('videoUrls');
    const imageUrls = shop.getDataValue('imageUrls');

    await deleteResources([...videoUrls, ...imageUrls]);

    await shop.destroy();
    res.status(200).json({ message: 'Shop deleted successfully.' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error deleting shop:', error);
    res.status(500).json({
      message: 'An error occurred while deleting the shop.',
      error: errorMessage,
    });
  }
};
