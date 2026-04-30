import type { LucideIcon } from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  price: string;
};
