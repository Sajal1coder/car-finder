import { Car } from '../types';
import { useState } from 'react';
import { addToWishlist, removeFromWishlist, getWishlist } from '../utils/localStorage';
import { useWishlist } from '../hooks/useWishlist';
import Image from 'next/image';

interface CarCardProps {
  car: Car;
  onWishlistChange: () => void;
}

export default function CarCard({ car, onWishlistChange }: CarCardProps) {
  const { updateWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(() => getWishlist().includes(car.id));

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car.id);
    }
    setIsWishlisted(!isWishlisted);
    updateWishlist();
    onWishlistChange();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <span className="text-xl">{isWishlisted ? '❤️' : '🤍'}</span>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {car.brand} {car.model}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2">${car.price.toLocaleString()}</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <span className="font-medium">Fuel:</span> {car.fuelType}
          </div>
          <div>
            <span className="font-medium">Seats:</span> {car.seatingCapacity}
          </div>
          <div>
            <span className="font-medium">Year:</span> {car.year}
          </div>
          <div>
            <span className="font-medium">Engine:</span> {car.specifications.engine}
          </div>
        </div>
      </div>
    </div>
  );
} 