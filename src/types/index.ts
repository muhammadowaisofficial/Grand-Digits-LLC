export type Info = {
  id: string;
  name: string;
  images: string[];
};

export type subCategoriesType = {
  id: string;
  name: string;
  image: string;
  link: string;
  cat: string;
};

export type GalleryType = {
  id: string;
  name: string;
  image: string;
  cat: string;
};

export type LightBoxImagesType = {
  id: string;
  cat: string;
  src: string;
}[];

export type PackagesType = {
  id: string;
  name: string;
  price: string;
  discountedPrice: string;
  desc: string;
  category: string;
  points: {
    heading: boolean;
    message: string;
  }[];
};
export type TestimoniesType = {
  id: string;
  clientName: string;
  image: string;
  stars: number;
  testimony: string;
};
export type ReviewsType = {
  id: string;
  clientName: string;
  designatioon: string;
  image: string;
  stars: number;
  mainpoint: string;
  review: string;
};

export type AboutServiceType = {
  id: string;
  name: string;
  image: string;
};

export type CategorizedServicesType = {
  id: string;
  serviceName: string;
  serviceDesc: string;
  cat: string;
  serviceGallery: GalleryType[];
};

export type servicesProps = {
  categorizedServices: CategorizedServicesType[];
  defaultService: string;
};

export type checkoutClientDataType = {
  name: string;
  phone: string;
  email: string;
  description: string;
};
