import {
  Armchair,
  Bike,
  Camera,
  Footprints,
  Gamepad2,
  Laptop,
  Monitor,
  Music,
  Package,
  Shirt,
  Smartphone,
  Tent,
} from 'lucide-react';
import type { Category, Product } from '../types/catalog';

export const recentSearches = ['맥북 air', '나이키 조던', '캠핑 텐트'];

export const categories: Category[] = [
  { id: 'pc', name: '컴퓨터', icon: Monitor },
  { id: 'laptop', name: '노트북', icon: Laptop },
  { id: 'phone', name: '핸드폰', icon: Smartphone },
  { id: 'bike', name: '자전거', icon: Bike },
  { id: 'cloth', name: '의류', icon: Shirt },
  { id: 'shoes', name: '신발', icon: Footprints },
  { id: 'goods', name: '굿즈', icon: Package },
  { id: 'camera', name: '카메라', icon: Camera },
  { id: 'game', name: '게임기', icon: Gamepad2 },
  { id: 'furniture', name: '가구', icon: Armchair },
  { id: 'music', name: '악기', icon: Music },
  { id: 'camping', name: '캠핑', icon: Tent },
];

export const products: Product[] = [
  { id: 1, name: 'MacBook Pro 14 M3', brand: 'Apple', price: '2,390,000원' },
  { id: 2, name: 'QuietComfort Ultra', brand: 'Bose', price: '499,000원' },
  {
    id: 3,
    name: 'G Pro X Superlight 2',
    brand: 'Logitech',
    price: '199,000원',
  },
  { id: 4, name: 'EOS R6 Mark II', brand: 'Canon', price: '3,190,000원' },
  { id: 5, name: 'PlayStation 5 Slim', brand: 'Sony', price: '558,000원' },
  {
    id: 6,
    name: 'Herman Miller Aeron',
    brand: 'Furniture',
    price: '2,100,000원',
  },
  { id: 7, name: 'Instax Mini 12', brand: 'Fujifilm', price: '110,000원' },
  { id: 8, name: 'Keychron Q1 Pro', brand: 'Keychron', price: '240,000원' },
];
