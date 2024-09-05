import { Model, DataTypes, Optional, Association } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Review from './review.model';
import TShop from './my-shop.model';

// Define interfaces for the Product model attributes
interface ProductAttributes {
  id: string;
  shopId?: string;
  userId?: string; 
  name: string;
  quantity: number;
  isAvailable: boolean;
  price: number;
  description: string;
  imageUrl: string[];
  videoUrl?: string | null;
  colours?: string[];
  deals?: string[];
  noOfSales: number;
}

// Define an interface for the Product creation attributes
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id' | 'shopId' | 'userId' | 'videoUrl' | 'colours' | 'deals'> {}

// Define the Product model class
class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: string;
  public shopId?: string;
  public userId?: string;
  public name!: string;
  public quantity!: number;
  public isAvailable!: boolean;
  public price!: number;
  public description!: string;
  public imageUrl!: string[];
  public videoUrl?: string | null; 
  public colours?: string[];
  public deals?: string[];
  public noOfSales!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Association methods
  public getReviews!: () => Promise<InstanceType<typeof Review>[]>;
  public getTShop!: () => Promise<TShop>;

  // Declare possible inclusions in an instance
  public readonly reviews?: InstanceType<typeof Review>[];
  public readonly TShop?: TShop;

  public static associations: {
    reviews: Association<Product, InstanceType<typeof Review>>;
    TShop: Association<Product, TShop>;
  };
}

// Initialize the Product model
Product.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    shopId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    deals: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    noOfSales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'products',
    indexes: [
      {
        fields: ['name'],
      },
    ],
  }
);

// Define associations
Product.hasMany(Review, { foreignKey: 'ProductId', as: 'reviews' });
Review.belongsTo(Product, { foreignKey: 'ProductId', as: 'product' });

// Define the association between Product and TShop
Product.belongsTo(TShop, { foreignKey: 'shopId', as: 'TShop' });
TShop.hasMany(Product, { foreignKey: 'shopId', as: 'products' });

export default Product;
