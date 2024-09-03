import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Review from './review.model';

// Product model
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING, // Assuming the video field stores a URL or path to the video file
      allowNull: true, // This field is optional
    },
    colours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true, // Optional field
    },
    deals: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true, // Optional field
    },
    noOfSales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    modelName: 'Product',
    tableName: 'products', // Explicit table name declaration
    indexes: [
      {
        fields: ['name'], // Example index on 'name' field
      },
    ],
  }
);

export default Product;
