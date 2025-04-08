import { useState, useEffect } from 'react';
import { getWishlist } from '../utils/localStorage';

export function useWishlist() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    // Initial load
    setWishlist(getWishlist());

    // Listen for storage changes
    const handleStorageChange = () => {
      setWishlist(getWishlist());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Force update when local storage changes in the same window
  const updateWishlist = () => {
    setWishlist(getWishlist());
  };

  return { wishlist, updateWishlist };
} 