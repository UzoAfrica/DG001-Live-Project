import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.config';

// UserProducts model
const UserProducts = sequelize.define('UserProducts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default UserProducts;
 