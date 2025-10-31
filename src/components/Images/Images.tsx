import React from 'react';
import { NasaData } from '../../type/appTypes';
import "./Images.css"

export const Images = ({ data }: { data: NasaData[] }) => {
    console.log("data", data)
    
    return ( 
        <div>
            {data.map((item, idx) => (
                <div key={idx} className='data'>
                    {item && item.data[0].title}
                </div>
            ))}
        </div>
     );
}
 
