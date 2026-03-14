import React, { Suspense } from 'react';
import C1 from './C1';


const fetchApi = async() => {
    const a = await fetch("https://openapi.programming-hero.com/api/all");
    return a.json();
}
const f = fetchApi();

const Countries = () => {
    return (
        <div>
            
            <Suspense fallback={<h2>Loading....</h2>}>
                <C1 f={f}></C1>
            </Suspense>

        </div>
    );
};

export default Countries;