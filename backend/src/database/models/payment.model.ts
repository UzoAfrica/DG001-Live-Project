import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model';

const Payment = sequelize.define(
  'Payment',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM('pending', 'success', 'failed'),
      allowNull: false,
    },
  },
  {
    indexes: [
      // Create index on reference field
      {
        fields: ['reference'],
      },
    ],
  }
);

// One-to-Many relationship between product and payment
Product.hasMany(Payment, {
  foreignKey: { allowNull: false },
});
Payment.belongsTo(Product);

export default Payment;
