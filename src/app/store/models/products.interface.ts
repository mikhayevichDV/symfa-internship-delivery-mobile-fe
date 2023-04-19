interface IPhoto {
  id: string;
  photoPath: string;
}

export interface IProductsRequest {
  id: string;
  title: string;
  description: string;
  type: string;
  flavourType: string;
  price: number;
  rating: number;
  photo: IPhoto;
}

export interface IOrderProduct extends IProductsRequest {
  quantity: number;
}

export interface IProductsResponse {
  products: IProductsRequest | null;
}
