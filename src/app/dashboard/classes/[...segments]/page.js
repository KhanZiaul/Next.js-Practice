import React from 'react';

const DashboardClass = ({params}) => {
    console.log(params.segments)
    const [year,id] = params.segments
    return (
        <div>
           <h2>This is Dashboard single class of {year} id no {id} </h2> 
        </div>
    );
};

export default DashboardClass;