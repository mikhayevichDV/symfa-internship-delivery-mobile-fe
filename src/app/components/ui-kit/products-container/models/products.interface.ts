interface IPhoto {
  id: string;
  photoPath: string;
}

export interface IProducts {
  id: string;
  title: string;
  type: string;
  flavourType: string;
  price: number;
  photo: IPhoto;
}
