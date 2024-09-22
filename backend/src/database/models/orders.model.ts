// models/Order.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/sequelize.config';

class Order extends Model {
  public id!: string;
  public userId!: string;
  public productName!: string;
  public amountPaid!: number;
  public deliveryStatus!: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  public dateOrdered!: Date;
  public quantity!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountPaid: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deliveryStatus: {
      type: DataTypes.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
      allowNull: false,
    },
    dateOrdered: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export default Order;
