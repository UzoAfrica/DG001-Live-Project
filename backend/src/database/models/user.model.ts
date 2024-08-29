import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import OTP from './otp.model';

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
User.hasOne(OTP);
OTP.belongsTo(User);

export default User;