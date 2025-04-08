import { Car, FilterOptions } from '../types';

// Mock data for cars
const mockCars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 25000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3',
    description: 'Reliable and comfortable sedan with great fuel efficiency.',
    specifications: {
      engine: '2.5L 4-cylinder',
      transmission: 'Automatic',
      mileage: '28 MPG',
      color: 'Silver'
    }
  },
  {
    id: 2,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    fuelType: 'Electric',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3',
    description: 'Premium electric vehicle with cutting-edge technology.',
    specifications: {
      engine: 'Electric Motor',
      transmission: 'Automatic',
      mileage: '358 miles',
      color: 'White'
    }
  },
  {
    id: 3,
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 23000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3',
    description: 'Sporty and efficient compact car with modern features.',
    specifications: {
      engine: '1.5L Turbo',
      transmission: 'CVT',
      mileage: '32 MPG',
      color: 'Blue'
    }
  },
  {
    id: 4,
    brand: 'Ford',
    model: 'Mustang',
    year: 2023,
    price: 35000,
    fuelType: 'Petrol',
    seatingCapacity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-4.0.3',
    description: 'Iconic American muscle car with powerful performance.',
    specifications: {
      engine: '5.0L V8',
      transmission: 'Manual',
      mileage: '19 MPG',
      color: 'Red'
    }
  },
  {
    id: 5,
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    price: 65000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3',
    description: 'Luxury SUV with premium features and comfort.',
    specifications: {
      engine: '3.0L Hybrid',
      transmission: 'Automatic',
      mileage: '24 MPG',
      color: 'Black'
    }
  },
  {
    id: 6,
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    price: 45000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3',
    description: 'Elegant luxury sedan with advanced technology.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '26 MPG',
      color: 'Silver'
    }
  },
  {
    id: 7,
    brand: 'Audi',
    model: 'Q5',
    year: 2023,
    price: 55000,
    fuelType: 'Diesel',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed7f1378430d?ixlib=rb-4.0.3',
    description: 'Premium SUV with quattro all-wheel drive.',
    specifications: {
      engine: '2.0L TDI',
      transmission: 'Automatic',
      mileage: '29 MPG',
      color: 'Gray'
    }
  },
  {
    id: 8,
    brand: 'Porsche',
    model: '911',
    year: 2023,
    price: 110000,
    fuelType: 'Petrol',
    seatingCapacity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3',
    description: 'Legendary sports car with exceptional performance.',
    specifications: {
      engine: '3.0L Twin-Turbo',
      transmission: 'PDK',
      mileage: '20 MPG',
      color: 'Yellow'
    }
  },
  {
    id: 9,
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2023,
    price: 25000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3',
    description: 'Versatile hatchback with German engineering.',
    specifications: {
      engine: '1.4L TSI',
      transmission: 'DSG',
      mileage: '31 MPG',
      color: 'White'
    }
  },
  {
    id: 10,
    brand: 'Subaru',
    model: 'Outback',
    year: 2023,
    price: 32000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed7f1378430d?ixlib=rb-4.0.3',
    description: 'Rugged wagon with all-wheel drive capability.',
    specifications: {
      engine: '2.5L Boxer',
      transmission: 'CVT',
      mileage: '26 MPG',
      color: 'Green'
    }
  },
  {
    id: 11,
    brand: 'Mazda',
    model: 'CX-5',
    year: 2023,
    price: 28000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-4.0.3',
    description: 'Stylish SUV with premium interior.',
    specifications: {
      engine: '2.5L Skyactiv',
      transmission: 'Automatic',
      mileage: '27 MPG',
      color: 'Red'
    }
  },
  {
    id: 12,
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2023,
    price: 27000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3',
    description: 'Modern SUV with advanced safety features.',
    specifications: {
      engine: '1.6L Hybrid',
      transmission: 'DCT',
      mileage: '38 MPG',
      color: 'Blue'
    }
  },
  {
    id: 13,
    brand: 'Kia',
    model: 'Sorento',
    year: 2023,
    price: 30000,
    fuelType: 'Hybrid',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3',
    description: 'Spacious three-row SUV with premium features.',
    specifications: {
      engine: '1.6L Hybrid',
      transmission: 'Automatic',
      mileage: '35 MPG',
      color: 'Black'
    }
  },
  {
    id: 14,
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    price: 35000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed7f1378430d?ixlib=rb-4.0.3',
    description: 'Iconic off-road vehicle with removable top.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '22 MPG',
      color: 'Yellow'
    }
  },
  {
    id: 15,
    brand: 'Chevrolet',
    model: 'Corvette',
    year: 2023,
    price: 65000,
    fuelType: 'Petrol',
    seatingCapacity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3',
    description: 'American supercar with mid-engine design.',
    specifications: {
      engine: '6.2L V8',
      transmission: 'Automatic',
      mileage: '19 MPG',
      color: 'Red'
    }
  },
  {
    id: 16,
    brand: 'Nissan',
    model: 'Rogue',
    year: 2023,
    price: 28000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3',
    description: 'Comfortable SUV with advanced safety tech.',
    specifications: {
      engine: '1.5L Turbo',
      transmission: 'CVT',
      mileage: '30 MPG',
      color: 'Silver'
    }
  },
  {
    id: 17,
    brand: 'Lexus',
    model: 'RX',
    year: 2023,
    price: 48000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3',
    description: 'Luxury SUV with hybrid efficiency.',
    specifications: {
      engine: '2.5L Hybrid',
      transmission: 'Automatic',
      mileage: '31 MPG',
      color: 'White'
    }
  },
  {
    id: 18,
    brand: 'Volvo',
    model: 'XC90',
    year: 2023,
    price: 55000,
    fuelType: 'Hybrid',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3',
    description: 'Premium three-row SUV with safety focus.',
    specifications: {
      engine: '2.0L Hybrid',
      transmission: 'Automatic',
      mileage: '28 MPG',
      color: 'Blue'
    }
  },
  {
    id: 19,
    brand: 'Land Rover',
    model: 'Range Rover',
    year: 2023,
    price: 95000,
    fuelType: 'Diesel',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed7f1378430d?ixlib=rb-4.0.3',
    description: 'Ultimate luxury SUV with off-road capability.',
    specifications: {
      engine: '3.0L Diesel',
      transmission: 'Automatic',
      mileage: '25 MPG',
      color: 'Black'
    }
  },
  {
    id: 20,
    brand: 'Jaguar',
    model: 'F-Type',
    year: 2023,
    price: 70000,
    fuelType: 'Petrol',
    seatingCapacity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3',
    description: 'British sports car with elegant design.',
    specifications: {
      engine: '3.0L Supercharged',
      transmission: 'Automatic',
      mileage: '23 MPG',
      color: 'British Racing Green'
    }
  },
  {
    id: 21,
    brand: 'Mitsubishi',
    model: 'Outlander',
    year: 2023,
    price: 27000,
    fuelType: 'Hybrid',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3',
    description: 'Affordable three-row SUV with PHEV option.',
    specifications: {
      engine: '2.4L Hybrid',
      transmission: 'CVT',
      mileage: '26 MPG',
      color: 'Gray'
    }
  },
  {
    id: 22,
    brand: 'Acura',
    model: 'MDX',
    year: 2023,
    price: 48000,
    fuelType: 'Petrol',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3',
    description: 'Premium three-row SUV with SH-AWD.',
    specifications: {
      engine: '3.5L V6',
      transmission: 'Automatic',
      mileage: '22 MPG',
      color: 'Silver'
    }
  },
  {
    id: 23,
    brand: 'Infiniti',
    model: 'QX60',
    year: 2023,
    price: 50000,
    fuelType: 'Petrol',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3',
    description: 'Luxury three-row SUV with premium features.',
    specifications: {
      engine: '3.5L V6',
      transmission: 'Automatic',
      mileage: '23 MPG',
      color: 'Black'
    }
  },
  {
    id: 24,
    brand: 'Genesis',
    model: 'GV80',
    year: 2023,
    price: 55000,
    fuelType: 'Petrol',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed7f1378430d?ixlib=rb-4.0.3',
    description: 'Luxury SUV with exceptional comfort.',
    specifications: {
      engine: '3.5L V6',
      transmission: 'Automatic',
      mileage: '21 MPG',
      color: 'White'
    }
  },
  {
    id: 25,
    brand: 'Alfa Romeo',
    model: 'Stelvio',
    year: 2023,
    price: 45000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3',
    description: 'Italian SUV with sporty handling.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '24 MPG',
      color: 'Red'
    }
  },
  {
    id: 26,
    brand: 'Mini',
    model: 'Cooper',
    year: 2023,
    price: 28000,
    fuelType: 'Petrol',
    seatingCapacity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3',
    description: 'Iconic British compact with go-kart handling.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '29 MPG',
      color: 'British Racing Green'
    }
  },
  {
    id: 27,
    brand: 'Buick',
    model: 'Enclave',
    year: 2023,
    price: 42000,
    fuelType: 'Petrol',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3',
    description: 'Comfortable three-row SUV with quiet ride.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '22 MPG',
      color: 'White'
    }
  },
  {
    id: 28,
    brand: 'Cadillac',
    model: 'Escalade',
    year: 2023,
    price: 80000,
    fuelType: 'Petrol',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3',
    description: 'Luxury full-size SUV with premium features.',
    specifications: {
      engine: '6.2L V8',
      transmission: 'Automatic',
      mileage: '17 MPG',
      color: 'Black'
    }
  },
  {
    id: 29,
    brand: 'Lincoln',
    model: 'Navigator',
    year: 2023,
    price: 78000,
    fuelType: 'Petrol',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed7f1378430d?ixlib=rb-4.0.3',
    description: 'Luxury full-size SUV with exceptional comfort.',
    specifications: {
      engine: '3.5L Twin-Turbo',
      transmission: 'Automatic',
      mileage: '18 MPG',
      color: 'Black'
    }
  },
  {
    id: 30,
    brand: 'Chrysler',
    model: 'Pacifica',
    year: 2023,
    price: 35000,
    fuelType: 'Hybrid',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3',
    description: 'Family-friendly minivan with hybrid option.',
    specifications: {
      engine: '3.6L Hybrid',
      transmission: 'Automatic',
      mileage: '30 MPG',
      color: 'Silver'
    }
  },
  {
    id: 31,
    brand: 'Dodge',
    model: 'Charger',
    year: 2023,
    price: 35000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3',
    description: 'Muscle sedan with powerful performance.',
    specifications: {
      engine: '3.6L V6',
      transmission: 'Automatic',
      mileage: '23 MPG',
      color: 'Red'
    }
  },
  {
    id: 32,
    brand: 'Ram',
    model: '1500',
    year: 2023,
    price: 40000,
    fuelType: 'Diesel',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3',
    description: 'Premium pickup truck with luxury features.',
    specifications: {
      engine: '3.0L EcoDiesel',
      transmission: 'Automatic',
      mileage: '24 MPG',
      color: 'Black'
    }
  }
];

export const fetchCars = async (filters: FilterOptions = {}, page: number = 1, pageSize: number = 10): Promise<{ cars: Car[]; total: number }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredCars = [...mockCars];

  // Apply filters
  if (filters.brand) {
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase().includes(filters.brand!.toLowerCase())
    );
  }
  if (filters.minPrice) {
    filteredCars = filteredCars.filter(car => car.price >= filters.minPrice!);
  }
  if (filters.maxPrice) {
    filteredCars = filteredCars.filter(car => car.price <= filters.maxPrice!);
  }
  if (filters.fuelType) {
    filteredCars = filteredCars.filter(car => car.fuelType === filters.fuelType);
  }
  if (filters.seatingCapacity) {
    filteredCars = filteredCars.filter(car => car.seatingCapacity === Number(filters.seatingCapacity));
  }

  // Calculate total pages
  const total = filteredCars.length;
  
  // Apply pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  console.log(`Total cars: ${total}, Showing: ${paginatedCars.length}, Page: ${page}, PageSize: ${pageSize}`);

  return {
    cars: paginatedCars,
    total: total
  };
};

export const fetchCarById = async (id: number): Promise<Car | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const car = mockCars.find(car => car.id === id);
  return car || null;
};