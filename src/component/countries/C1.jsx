import React, { use, useState } from 'react';
import Country from '../country/country';

const C1 = ({f}) => {

    const p = use(f);
    const countries = p.countries;

    const [cnt, setC] = useState(0);

    const handle = (visited) => {
        if(visited)
            setC(c => c-1);
        else
            setC(c => c+1);
    }

    return (
        <div>
            <h1>Hello : {countries.length}</h1>
            <h2>Total Count: {cnt}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    countries.map(v => <Country key={v.cca3.cca3} j={v} handle={handle}></Country>)
                }
            </div>
        </div>
    );
};

export default C1;