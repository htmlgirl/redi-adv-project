import React from 'react';

const SortMenu = ({sortType, onSortChange}: { sortType: string; onSortChange: (value: string) => void }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSortChange(e.target.value);
    };

    return (
        <div className="sort-menu flex items-center justify-end space-x-4 bg-blue-50 p-4 rounded-lg shadow-lg">
            <label htmlFor="sort" className="text-sm items-center font-medium text-gray-800">Sort By:</label>
            <select
                id="sort"
                value={sortType}
                onChange={handleSortChange}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightblue-500 focus:border-lightblue-500 bg-white text-gray-800 hover:bg-blue-100 transition-colors duration-300"
            >
                <option value="default">Default</option>
                <option value="year-asc">Year Ascending</option>
                <option value="year-desc">Year Descending</option>
                <option value="title-asc">Title A-Z</option>
                <option value="title-desc">Title Z-A</option>
            </select>
        </div>
    );
};

export default SortMenu;
