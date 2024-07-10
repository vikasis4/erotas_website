import React from 'react';

const FilterSection = () => {
  return (
    <div className="w-full ml-4 max-w-xs p-4 rounded-lg border border-gray-200 shadow-md">
      <h2 className="text-lg font-semibold mb-2">FILTERS</h2>
      <p className="text-gray-500 mb-4">100+ Products</p>
      <div className="border-t border-gray-300 mb-4"></div>
      
      <h3 className="text-md font-semibold mb-2">Category</h3>
      <div className="relative mb-4">
        <input 
          type="text" 
          className="w-full p-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
        />
        <svg 
          className="w-4 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400"
          fill="currentColor" 
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M12.9 14.32a8 8 0 111.414-1.414l3.386 3.386a1 1 0 01-1.414 1.414l-3.386-3.386zM8 14A6 6 0 108 2a6 6 0 000 12z" 
            clipRule="evenodd"
          />
        </svg>
      </div>
      
      <div className="space-y-2">
        {["Teddy","Freshner","Clocks","Wallpapers"].map(category => (
          <label key={category} className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
