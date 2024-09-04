import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model';

// Shop model
const TShop = sequelize.define('TShop', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'NGN',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shopAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isOpen: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  coverImage: {
    type: DataTypes.STRING,
  },
  ownerId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  ratings: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  securityFeatures: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  legalBusinessAddress: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  videoUrls: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true, 
  },
  imageUrls: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true, 
  },
});

// One-to-Many relationship between shop and product
TShop.hasMany(Product, {
  foreignKey: { allowNull: false },
});
Product.belongsTo(TShop);

export default TShop;
