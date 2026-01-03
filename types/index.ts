export type ID = string;
export type ISODateString = string;
export type ProductStatus = "draft" | "active" | "archived";

export interface Category {
  id?: ID;
  companyId?: ID;
  name: string;
  icon?: React.ReactNode;
  createdAt?: ISODateString;
  updatedAt?: ISODateString;
}

export interface Product {
  id: ID;
  companyId: ID;

  categoryId?: ID | null;

  name: string;
  slug: string; // unique per company
  description?: string;

  status: ProductStatus;

  // Pricing: optional because many local shops prefer "ask price"
  priceCents?: number; // store as integer to avoid float issues
  currency?: "BRL";

  // Inventory / availability (optional for vitrine MVP)
  isAvailable?: boolean;

  // Images
  coverImageUrl?: string;
  imageUrls: string[]; // additional images

  // Promotion (optional)
  isPromotional?: boolean;
  featuredPosition?: number;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface BannerImage {
  id: ID;
  companyId: ID;

  imageUrl: string;
  altText?: string;

  // Optional click-through behavior
  linkUrl?: string;

  position: number;
  isActive: boolean;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}
