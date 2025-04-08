import { Car } from '../types';

const WISHLIST_KEY = 'car-wishlist';

export const getWishlist = (): number[] => {
  if (typeof window === 'undefined') return [];
  const wishlist = localStorage.getItem(WISHLIST_KEY);
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (carId: number): void => {
  const wishlist = getWishlist();
  if (!wishlist.includes(carId)) {
    wishlist.push(carId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (carId: number): void => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(id => id !== carId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
};

export const isInWishlist = (carId: number): boolean => {
  const wishlist = getWishlist();
  return wishlist.includes(carId);
}; 