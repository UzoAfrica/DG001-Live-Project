import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model';
import User from './user.model';

// Wishlist model
const Wishlist = sequelize.define('Wishlist', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
}, {
  tableName: 'Wishlists',
});

// Associations
User.belongsToMany(Product, { through: Wishlist, foreignKey: 'UserId' });
Product.belongsToMany(User, { through: Wishlist, foreignKey: 'ProductId' });

export default Wishlist;
