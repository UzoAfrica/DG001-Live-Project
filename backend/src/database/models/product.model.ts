import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

// Product model
const Product = sequelize.define('Product', {
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
  },
  deals: {
    // The product tags e.g., 'furniture', 'kids clothes', etc.
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  noOfSales: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Product;
