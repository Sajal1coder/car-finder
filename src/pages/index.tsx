import { useState, useEffect } from 'react';
import { Car, FilterOptions } from '../types';
import { fetchCars } from '../utils/api';
import CarCard from '../components/CarCard';
import FilterPanel from '../components/FilterPanel';
import Pagination from '../components/Pagination';
import ThemeToggle from '../components/ThemeToggle';
import WishlistButton from '../components/WishlistButton';
import { getWishlist } from '../utils/localStorage';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isWishlistView, setIsWishlistView] = useState(false);
  const pageSize = 10;

  const loadWishlistCars = async () => {
    try {
      setLoading(true);
      const wishlist = getWishlist();
      if (wishlist.length === 0) {
        setCars([]);
        setTotalPages(1);
        return;
      }
      const { cars: fetchedCars } = await fetchCars({}, 1, 100); // Fetch all cars to filter
      const wishlistedCars = fetchedCars.filter(car => wishlist.includes(car.id));
      setCars(wishlistedCars);
      setTotalPages(1);
    } catch (err) {
      setError('Failed to load wishlist. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadAllCars = async () => {
    try {
      setLoading(true);
      const { cars: fetchedCars, total } = await fetchCars(
        { ...filters, brand: searchQuery },
        currentPage,
        pageSize
      );
      setCars(fetchedCars);
      setTotalPages(Math.ceil(total / pageSize));
    } catch (err) {
      setError('Failed to load cars. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isWishlistView) {
      loadWishlistCars();
    } else {
      loadAllCars();
    }
  }, [filters, currentPage, searchQuery, isWishlistView]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleWishlistChange = () => {
    if (isWishlistView) {
      loadWishlistCars();
    } else {
      setCars([...cars]); // Force re-render of current view
    }
  };

  const toggleWishlistView = () => {
    setIsWishlistView(!isWishlistView);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <WishlistButton onToggle={toggleWishlistView} isWishlistView={isWishlistView} />
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {isWishlistView ? 'My Wishlist' : 'Car Finder'}
        </h1>

        {!isWishlistView && (
          <FilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
          />
        )}

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : cars.length === 0 ? (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">
            {isWishlistView ? 'No cars in your wishlist yet.' : 'No cars found matching your criteria.'}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onWishlistChange={handleWishlistChange}
                />
              ))}
            </div>

            {!isWishlistView && totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
} 