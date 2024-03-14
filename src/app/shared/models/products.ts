export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export interface ProductRequest {
  title: string;
  price: number;
  description: string;
  images: string[];
}
