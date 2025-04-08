export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  seatingCapacity: number;
  imageUrl: string;
  description: string;
  specifications: {
    engine: string;
    transmission: string;
    mileage: string;
    color: string;
  };
}

export interface FilterOptions {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  fuelType?: string;
  seatingCapacity?: number;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
} 