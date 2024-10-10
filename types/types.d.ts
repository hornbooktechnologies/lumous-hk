import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IInfoBlock {
  title?: string;
  subTitle?: string;
  img?: string | StaticImport;
}

export interface IRoundedButtonProps {
  title?: string;
  className?: string;
}

export interface IFeatureCardProps {
  title?: string;
  subTitle?: string;
  img?: string | StaticImport;
}

export interface IExploreCardProps {
  img?: string | StaticImport;
  multiData?: boolean;
}

export interface ProductCardProps {
  image: StaticImageData;
  title: string;
  price: string | number;
  oldPrice?: string | number;
  rating: number;
  discount?: string;
}
