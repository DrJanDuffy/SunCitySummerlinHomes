
// Property interfaces for search functionality
export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  features: string[];
  isNew?: boolean;
  propertyType?: string;
}

export interface PropertyFilters {
  minPrice: number;
  maxPrice: number;
  bedrooms: number | string;
  bathrooms: number | string;
  features: string[];
  propertyType?: string;
}
