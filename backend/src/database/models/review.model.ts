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
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      // Create index on userName field
      {
        unique: true,
        fields: ['userName'],
      },
    ],
  }
);

export default Review;
 