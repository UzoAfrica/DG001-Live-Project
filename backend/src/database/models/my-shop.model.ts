import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

enum category {
  ELECTRONICS = 'ELECTRONICS',
  FASHION = 'FASHION',
  FOOD = 'FOOD',
  HEALTH = 'HEALTH',
  HOME = 'HOME',
  SPORTS = 'SPORTS',
  CHILDREN = 'CHILDREN',
  OTHERS = 'OTHERS',
}
// Shop model
const Shop = sequelize.define('Shop', {
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
    type: DataTypes.ENUM(
      category.ELECTRONICS,
      category.FASHION,
      category.FOOD,
      category.HEALTH,
      category.HOME,
      category.SPORTS,
      category.CHILDREN,
      category.OTHERS
    ),
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
  // coverImage: {
  //   type: DataTypes.STRING,
  // },
  // ownerId: {
  //   type: DataTypes.UUID,
  //   allowNull: true,
  // },
  ratings: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  securityFeatures: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shippingAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shippingPrices: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shippingServices: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zip: {
    type: DataTypes.STRING,
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
// Shop.hasMany(Product, {
//   foreignKey: { allowNull: true },
// });
// Product.belongsTo(Shop);

export default Shop;
