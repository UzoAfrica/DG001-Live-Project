import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

// ResetToken model
const ResetToken = sequelize.define(
  'ResetToken',
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
    token: {
      type: DataTypes.STRING,
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

export default ResetToken;
