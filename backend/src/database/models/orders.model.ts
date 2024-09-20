// models/Order.ts
import { Model, DataTypes } from 'sequelize';
import  sequelize  from '../../config/sequelize.config'; 

class Order extends Model {
  public id!: number;
  public userId!: number;
  public productName!: string;
  public amountPaid!: number;
  public deliveryStatus!: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  public dateOrdered!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export default Order;
