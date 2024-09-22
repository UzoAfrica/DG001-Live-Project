import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Review from './review.model';
// Product model

enum category {
  ELECTRONICS = 'ELECTRONICS',
  FASHION = 'FASHION',
  FOOD = 'FOOD',
  HEALTH = 'HEALTH',
  HOME = 'HOME',
  SPORTS = 'SPORTS',
  CHILDREN = 'CHILDREN',
  ADULTS = 'ADULT',
  OTHERS = 'OTHERS',
}
enum color {
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  RED = 'RED',
  ORANGE = 'ORANGE',
  YELLOW = 'YELLOW',
}

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
    category: {
      type: DataTypes.ENUM(
        category.ELECTRONICS,
        category.FASHION,
        category.FOOD,
        category.HEALTH,
        category.HOME,
        category.SPORTS,
        category.CHILDREN,
        category.ADULTS,
        category.OTHERS
      ),
      allowNull: true,
    },
    color: {
      type: DataTypes.ENUM(
        color.GREEN,
        color.BLUE,
        color.RED,
        color.ORANGE,
        color.YELLOW
      ),
      allowNull: true,
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
    tableName: 'Products',
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
