import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model';
import User from './user.model';

// Cart model
const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  tableName: 'Carts',
});

// Associations
User.belongsToMany(Product, { through: Cart, foreignKey: 'UserId' });
Product.belongsToMany(User, { through: Cart, foreignKey: 'ProductId' });

export default Cart;
