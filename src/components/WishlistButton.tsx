import { useWishlist } from '../hooks/useWishlist';

interface WishlistButtonProps {
  onToggle: () => void;
  isWishlistView: boolean;
}

export default function WishlistButton({ onToggle, isWishlistView }: WishlistButtonProps) {
  const { wishlist } = useWishlist();

  return (
    <button
      onClick={onToggle}
      className="fixed top-4 left-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label={isWishlistView ? "Return to main view" : "View wishlist"}
    >
      {isWishlistView ? (
        <span className="text-xl">🏠</span>
      ) : (
        <div className="relative">
          <span className="text-xl">❤️</span>
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </div>
      )}
    </button>
  );
} 