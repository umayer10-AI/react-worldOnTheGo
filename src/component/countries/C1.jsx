import React, { use, useState } from 'react';
import Country from '../country/country';

const C1 = ({f}) => {

    const p = use(f);
    const countries = p.countries;

    const [cnt, setCnt] = useState(0);
    const [C, setC] = useState([]);

    const handle = (visited) => {
        if(visited)
            setCnt(c => c-1);
        else
            setCnt(c => c+1);
    }

    const hh = (j) => {
        console.log(j.name.common)
        const n = [...C,j];
        setC(n);
    }

    return (
        <div>
            <h1>Hello : {countries.length}</h1>
            <h2>Total Count: {cnt}</h2>
            <ul>
                {
                    C.map(v => <li>{v.name.common}</li>)
                }
            </ul>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    countries.map(v => <Country key={v.cca3.cca3} j={v} handle={handle} hh={hh}></Country>)
                }
            </div>
        </div>
    );
};

export default C1;