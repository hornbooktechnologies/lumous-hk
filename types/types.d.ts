import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IInfoBlock {
	title?: string;
	subTitle?: string;
	img?: string | StaticImport;
}
