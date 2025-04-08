import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Car } from '../../types';
import { fetchCarById } from '../../utils/api';
import { isInWishlist, addToWishlist, removeFromWishlist } from '../../utils/localStorage';
import Image from 'next/image';
import Link from 'next/link';

export default function CarDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const loadCar = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const carData = await fetchCarById(Number(id));
        if (carData) {
          setCar(carData);
          setIsWishlisted(isInWishlist(carData.id));
        } else {
          setError('Car not found');
        }
      } catch (err) {
        setError('Failed to load car details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCar();
  }, [id]);

  const toggleWishlist = () => {
    if (!car) return;
    
    if (isWishlisted) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car.id);
    }
    setIsWishlisted(!isWishlisted);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">{error || 'Car not found'}</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={car.imageUrl}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {car.brand} {car.model}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  ${car.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={toggleWishlist}
                className="text-2xl"
              >
                {isWishlisted ? '❤️' : '🤍'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Year</h3>
                <p className="text-gray-600 dark:text-gray-400">{car.year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Fuel Type</h3>
                <p className="text-gray-600 dark:text-gray-400">{car.fuelType}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Seating Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400">{car.seatingCapacity}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Engine</h3>
                <p className="text-gray-600 dark:text-gray-400">{car.specifications.engine}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Transmission</h3>
                <p className="text-gray-600 dark:text-gray-400">{car.specifications.transmission}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Mileage</h3>
                <p className="text-gray-600 dark:text-gray-400">{car.specifications.mileage}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-400">{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 