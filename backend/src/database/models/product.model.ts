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
    MyShopId: { 
      type: DataTypes.UUID,
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    colours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    deals: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    noOfSales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    modelName: 'Product',
    tableName: 'products',
    indexes: [
      {
        fields: ['name'],
      },
    ],
  }
);

// Associations
Product.hasMany(Review, { foreignKey: 'ProductId' });
Review.belongsTo(Product, { foreignKey: 'ProductId' });

export default Product;
