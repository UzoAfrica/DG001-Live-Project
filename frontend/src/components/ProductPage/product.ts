// src/data/products.ts
import Blender from '../../assets/images/blender.png';
import Ceramic from '../../assets/images/ceramics.png';
import Microwave from '../../assets/images/microwave.png';
import Cup from '../../assets/images/cups.png';
import WoodChair from '../../assets/images/woodChair.png';
import Wash from '../../assets/images/wash.png';
import Utensil from '../../assets/images/utensil.png';
import Redblender from '../../assets/images/redBlender.png';
import Mix from '../../assets/images/mixer.png';
import PillowChair from '../../assets/images/pillowChair.png';
import Kitchen from '../../assets/images/kitchen.png';
import wood from '../../assets/images/wooden.png';

export const products = [
  {
    id: 1,
    name: 'Blender',
    description: 'High-speed blender',
    price: 'N50,000',
    image: Blender,
  },
  {
    id: 2,
    name: 'Microwave',
    description: 'Compact microwave oven',
    price: 'N250,000',
    image: Microwave,
  },
  {
    id: 3,
    name: 'Kitchen Set',
    description: 'Complete kitchen set',
    price: 'N500,000',
    image: Kitchen,
  },
  {
    id: 4,
    name: 'Pillow Chair',
    description: 'Comfortable pillow chair',
    price: 'N100,000',
    image: PillowChair,
  },
  {
    id: 5,
    name: 'Red Blender',
    description: 'Stylish red blender',
    price: 'N120,000',
    image: Redblender,
  },
  {
    id: 6,
    name: 'Washing Machine',
    description: 'Efficient washing machine',
    price: 'N350,000',
    image: Wash,
  },
  {
    id: 7,
    name: 'Ceramic Set',
    description: 'Elegant ceramic set',
    price: 'N60,000',
    image: Ceramic,
  },
  {
    id: 8,
    name: 'Wooden Utensils',
    description: 'Set of wooden utensils',
    price: 'N30,000',
    image: wood,
  },
  {
    id: 9,
    name: 'Mixer',
    description: 'Handheld mixer',
    price: 'N70,000',
    image: Mix,
  },
  {
    id: 10,
    name: 'Cup Set',
    description: 'Set of 6 cups',
    price: 'N40,000',
    image: Cup,
  },
  {
    id: 11,
    name: 'Wooden Chair',
    description: 'Comfortable wooden chair',
    price: 'N150,000',
    image: WoodChair,
    // date : 
    rating : 4.0
  },
  {
    id: 12,
    name: 'Kitchen Utensils',
    description: 'Complete kitchen utensils',
    price: 'N70,000',
    image: Utensil,
    // date: 
    rating : 4.0
  },
];
