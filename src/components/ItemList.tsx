import React from 'react';
import { useApp } from '@/contexts/AppContext';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import { motion, AnimatePresence } from 'framer-motion';
import { FileX } from 'lucide-react';

const ItemList: React.FC = () => {
  const { paginatedData, filteredData, currentPage, totalPages, setCurrentPage } = useApp();

  return (
    <div className="space-y-6">
      {/* Filters */}
      <SearchBar />

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{paginatedData.length}</span> of{' '}
          <span className="font-medium text-foreground">{filteredData.length}</span> sessions
        </p>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {paginatedData.length > 0 ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {paginatedData.map((item, index) => (
              <ItemCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <FileX className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              No sessions found
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ItemList;
