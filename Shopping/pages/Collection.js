import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import { products } from '../assets/frontend_assets/assets';

export default function Collection() {
  const [data, setData] = useState(products); 
  const [filters, setFilters] = useState({
    categories: [],
    types: [],
  });

  const handleFilterChange = (e, filterCategory) => {
    const { checked, value } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[filterCategory] = [...updatedFilters[filterCategory], value];
      } else {
        updatedFilters[filterCategory] = updatedFilters[filterCategory].filter((item) => item !== value);
      }
      return updatedFilters;
    });
  };

  useEffect(() => {
    let filteredData = products;
    if (filters.categories.length > 0) {
      filteredData = filteredData.filter((product) => filters.categories.includes(product.category));
    }
    if (filters.types.length > 0) {
      filteredData = filteredData.filter((product) => filters.types.includes(product.subCategory));
    }

    setData(filteredData);
  }, [filters]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        <aside className="w-1/4 pr-8">
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-2">Filters</h2>

            <div className="mb-6">
              <h3 className="font-semibold">CATEGORIES</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Men"
                    onChange={(e) => handleFilterChange(e, 'categories')}
                    className="mr-2"
                  />
                  Men
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Women"
                    onChange={(e) => handleFilterChange(e, 'categories')}
                    className="mr-2"
                  />
                  Women
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Kids"
                    onChange={(e) => handleFilterChange(e, 'categories')}
                    className="mr-2"
                  />
                  Kids
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold">Types</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Topwear"
                    onChange={(e) => handleFilterChange(e, 'types')}
                    className="mr-2"
                  />
                  Topwear
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Bottomwear"
                    onChange={(e) => handleFilterChange(e, 'types')}
                    className="mr-2"
                  />
                  Bottomwear
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Winterwear"
                    onChange={(e) => handleFilterChange(e, 'types')}
                    className="mr-2"
                  />
                  Winterwear
                </label>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <Title text1="ALL" text2="COLLECTIONS" />
            <div className="flex items-center">
              <label className="mr-2">Sort by:</label>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Date: Newest First</option>
                <option>Bestseller</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data.map((product) => (
              <Card 
                name={product.name}
                image={product.image} 
                price={product.price}
                description={product.description}
                sizes={product.sizes}
                bestseller={product.bestseller}
                date={product.date}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
