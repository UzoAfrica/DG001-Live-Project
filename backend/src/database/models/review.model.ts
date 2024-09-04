// import { DataTypes } from 'sequelize';
// import sequelize from '../../config/sequelize.config';

// // Review model
// const Review = sequelize.define(
//   'Review',
//   {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     comment: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     rating: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//   },
//   {
//     indexes: [
//       // Create composite unique index on UserId and ProductId column
//       {
//         unique: true,
//         fields: ['UserId', 'ProductId'],
//       },
//     ],
//   }
// );

// export default Review;

import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model'; // Ensure this import is correct

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
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProductId: {  
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Product,  
        key: 'id'
      }
    },
    UserId: {  // Ensure the UserId field is defined similarly
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['UserId', 'ProductId'],
      },
    ],
  }
);

export default Review;
