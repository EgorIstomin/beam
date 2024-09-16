import React from 'react';
import { Loader } from 'lucide-react'; // Импорт иконки "Loader" из Lucide

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-200 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
