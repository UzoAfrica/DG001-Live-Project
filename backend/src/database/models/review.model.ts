import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

// Review model
const Review = sequelize.define(
  'Review',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      // Create composite unique index on UserId and ProductId column
      {
        unique: true,
        fields: ['UserId', 'ProductId'],
      },
    ],
  }
);

export default Review;
