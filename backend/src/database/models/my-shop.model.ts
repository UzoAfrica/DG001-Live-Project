import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model';

// Shop model
const TShop = sequelize.define('TShop', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  shopAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// One-to-Many relationship between shop and product
TShop.hasMany(Product, {
  foreignKey: { allowNull: false },
});
Product.belongsTo(TShop);

export default TShop;
 