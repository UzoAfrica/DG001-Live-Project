import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import MyShop from './my-shop.model';
import OTP from './otp.model';
import Product from './product.model';
import Review from './review.model';
import UserProducts from './user-product.model';

// User model
const User = sequelize.define(
  'User',
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    googleID: {
      type: DataTypes.STRING,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user', 'seller'),
      defaultValue: 'user',
      allowNull: false,
    },
    referralSource: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    shopName: {
      type: DataTypes.STRING,
    },
    mobileNumber: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    profileImage: {
      type: DataTypes.STRING,
    },
  },
  {
    indexes: [
      // Create index on email field
      {
        unique: true,
        fields: ['email'],
      },
    ],
  }
);

// One-To-One relationship between user and otp
User.hasOne(OTP, {
  foreignKey: { allowNull: false },
});
OTP.belongsTo(User);

// One-To-One relationship between user and shop
User.hasOne(MyShop, {
  foreignKey: { allowNull: false },
});
MyShop.belongsTo(User);

// One-to-Many relationship between user and review
User.hasMany(Review, {
  foreignKey: { allowNull: false },
});
Review.belongsTo(User);

// Many-To-Many relationship between user and product
Product.belongsToMany(User, { through: UserProducts });
User.belongsToMany(Product, { through: UserProducts });

export default User;
 