import React, { use, useState } from 'react';
import Country from '../country/country';

const C1 = ({f}) => {

    const p = use(f);
    const countries = p.countries;

    const [cnt, setCnt] = useState(0);
    const [C, setC] = useState([]);
    const [flag, setF] = useState([]);

    const handle = (visited,j) => {
        if(visited){
            setCnt(c => c-1);
            // const g = C.filter(v => v.name.common !== j.name.common);
            setC(c => c.filter(v => v.name.common !== j.name.common));
        }
        else{
            setCnt(c => c+1);
            setC(v => [...v,j]);
        }
    }

    const hh = (flag) => {

        setF(c => c.includes(flag) ? c.filter(v => v !== flag) : [...c,flag]);
    }


    return (
        <div>
            <h1>Hello : {countries.length}</h1>
            <h2>Total Count: {cnt}</h2>
            <h2>Total Flag: {flag.length}</h2>
            <ul>
                {
                    C.map(v => <li>{v.name.common}</li>)
                }
            </ul>
            <div className='col-span-full flex justify-center gap-5 mt-5 flex-wrap'>
                {
                    flag.map( v => <img width={"50px"} src={v}></img>)
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    countries.map(v => <Country key={v.cca3.cca3} j={v} handle={handle} hh={hh}></Country>)
                }
            </div>
        </div>
    );
};

export default C1;