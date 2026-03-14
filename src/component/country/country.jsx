import React, { useState } from 'react';

const Country = ({j,handle}) => {

    const [visited,setV] = useState(false);

    const a = () => {
        setV(!visited);
        handle(visited);
    }

    // console.log(j.cca3.cca3)
    return (
        <div>
            <div className={`border-2 border-red-500 p-10 m-5 rounded-2xl ${visited && 'bg-blue-500'}`}>
                <h2 className='font-bold'>{j.name.common} : {j.population.population}</h2>
                <h2>{j.cca3.cca3} : {j.area.area}</h2>
                <img className='mx-auto' src={j.flags.flags.png} alt={j.flags.flags.alt} />
                <p>Area: {j.area.area} {j.area.area > 300000 ? "Big Country": "Small Country"}</p>
                <button onClick={a} className='border border-yellow-200 p-3 rounded-2xl font-bold'>
                    {
                        visited ? "Visited" : "Not Visited"
                    }
                </button>
            </div>
        </div>
    );
};

export default Country;