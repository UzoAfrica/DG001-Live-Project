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
    rating:5.0,
    date: '2024-08-01T16:00:00Z'
  },
  {
    id: 2,
    name: 'Microwave',
    description: 'Compact microwave oven',
    price: 'N250,000',
    image: Microwave,
    date: '2024-09-16T10:00:00Z',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Kitchen Set',
    description: 'Complete kitchen set',
    price: 'N500,000',
    image: Kitchen,
    date: '2024-07-28T10:00:00Z',
    rating: 4.5
  },
  {
    id: 4,
    name: 'Pillow Chair',
    description: 'Comfortable pillow chair',
    price: 'N100,000',
    image: PillowChair,
    date: '2024-07-08T10:00:00Z',
    rating: 5.0
  },
  {
    id: 5,
    name: 'Red Blender',
    description: 'Stylish red blender',
    price: 'N120,000',
    image: Redblender,
    date: '2024-08-28T09:00:00Z',
    rating: 5.0
  },
  {
    id: 6,
    name: 'Washing Machine',
    description: 'Efficient washing machine',
    price: 'N350,000',
    image: Wash,
    date: '2024-08-18T06:00:00Z',
    rating: 5.0
  },
  {
    id: 7,
    name: 'Ceramic Set',
    description: 'Elegant ceramic set',
    price: 'N60,000',
    image: Ceramic,
    date: '2024-09-28T10:00:00Z',
    rating: 3.5
  },
  {
    id: 8,
    name: 'Wooden Utensils',
    description: 'Set of wooden utensils',
    price: 'N30,000',
    image: wood,
    date: '2024-07-28T06:00:00Z',
    rating: 4.0
  },
  {
    id: 9,
    name: 'Mixer',
    description: 'Handheld mixer',
    price: 'N70,000',
    image: Mix,
    date: '2024-08-28T14:00:00Z',
    rating: 4.5
  },
  {
    id: 10,
    name: 'Cup Set',
    description: 'Set of 6 cups',
    price: 'N40,000',
    image: Cup,
    date: '2024-01-15T08:00:00Z',
    rating: 4.5
  },
  {
    id: 11,
    name: 'Wooden Chair',
    description: 'Comfortable wooden chair',
    price: 'N150,000',
    image: WoodChair,
    date : '2024-01-17T10:00:00Z',
    rating : 4.5
  },
  {
    id: 12,
    name: 'Kitchen Utensils',
    description: 'Complete kitchen utensils',
    price: 'N70,000',
    image: Utensil,
    date: '2024-01-15T10:00:00Z',
    rating : 4.0
  },
];
