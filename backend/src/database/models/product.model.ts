import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

// OTP model
const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    ownerId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    shopId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    noOfSales: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
  },
  {
    indexes: [
      // Create index on email field
      {
        fields: ['userEmail'],
      },
    ],
  }
);

export default Product;
