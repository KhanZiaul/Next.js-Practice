import React from 'react';

export const metadata = {
    title: 'Products | Dashboard | Practice NextJS',
    description: 'Practice NextJS',
  }

const DashboardProduct = ({params}) => {
    const [year , id] = params.segments || []
    return (
        <div>
            <h2>This is single product {year || new Date().getFullYear()} id no {id || "01"}</h2>
        </div>
    );
};

export default DashboardProduct;