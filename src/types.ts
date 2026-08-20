export interface Property {
  id: string;
  name: string;
  location: string;
  type: 'Office' | 'Industrial' | 'Retail' | 'Logistics';
  price: string;
  sqm: number;
  image: string;
  description: string;
}
