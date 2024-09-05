import sequelize from '../../src/config/sequelize.config';
import User from '../database/models/user.model';
import Product from '../database/models/product.model';
import OTP from '../database/models/otp.model';

// Initialize all associations after importing all models

// Define associations for Product
Product.belongsToMany(User, { through: 'UserWishlist', as: 'UsersWishlist' });
Product.belongsToMany(User, { through: 'UserCart', as: 'UsersCart' });

// Define associations for User
User.belongsToMany(Product, { through: 'UserWishlist', as: 'Wishlist' });
User.belongsToMany(Product, { through: 'UserCart', as: 'Cart' });

// Define other associations
User.hasOne(OTP);
OTP.belongsTo(User);

// Synchronize all models with the database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) =>
    console.error('Unable to create tables, check your configuration:', error)
  );

export { User, Product, OTP };
