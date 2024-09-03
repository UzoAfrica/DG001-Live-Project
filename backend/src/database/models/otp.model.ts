import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

// OTP model
const OTP = sequelize.define(
  'OTP',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
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

export default OTP;
 