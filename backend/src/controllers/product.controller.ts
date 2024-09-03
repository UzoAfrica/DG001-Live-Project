import { Request, Response } from 'express';
import Product from '../database/models/product.model';
import { getSpecificProductSchema } from '../validators/product.validator';

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

    /**
     * Because typescript can't implicitly recognize sequelize association mixins.
     * See https://github.com/sequelize/sequelize/issues/14302
     */
    // @ts-expect-error: typescript can't implicitly recognize sequelize association mixins.
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
