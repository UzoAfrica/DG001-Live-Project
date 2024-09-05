import { Model, DataTypes, Optional, Association } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Product from './product.model';

// Define an interface for Shop attributes
interface TShopAttributes {
  id: string;
  name: string;
  currency: string;
  category?: string;
  shopAddress: string;
  isOpen: boolean;
  description?: string;
  coverImage?: string;
  ownerId?: string;
  ratings: number;
  securityFeatures?: object;
  legalBusinessAddress?: object;
  videoUrls?: string[];
  imageUrls?: string[];
}

// Optional attributes for creation
interface TShopCreationAttributes extends Optional<TShopAttributes, 'id' | 'category' | 'description' | 'coverImage' | 'ownerId' | 'securityFeatures' | 'legalBusinessAddress' | 'videoUrls' | 'imageUrls'> {}

// Define the Shop model class
class TShop extends Model<TShopAttributes, TShopCreationAttributes> implements TShopAttributes {
  public id!: string;
  public name!: string;
  public currency!: string;
  public category?: string;
  public shopAddress!: string;
  public isOpen!: boolean;
  public description?: string;
  public coverImage?: string;
  public ownerId?: string;
  public ratings!: number;
  public securityFeatures?: object;
  public legalBusinessAddress?: object;
  public videoUrls?: string[];
  public imageUrls?: string[];

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Association methods
  public getProducts!: () => Promise<Product[]>;

  // Declare possible inclusions in an instance
  public readonly products?: Product[];

  public static associations: {
    products: Association<TShop, Product>;
  };
}

// Initialize the Shop model
TShop.init(
  {
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
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'NGN',
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shopAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    coverImage: {
      type: DataTypes.STRING,
    },
    ownerId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    ratings: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    securityFeatures: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    legalBusinessAddress: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    videoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    imageUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'shops',
  }
);

// Define the associations
TShop.hasMany(Product, { foreignKey: 'shopId', as: 'products' });
Product.belongsTo(TShop, { foreignKey: 'shopId', as: 'TShop' });

export default TShop;
