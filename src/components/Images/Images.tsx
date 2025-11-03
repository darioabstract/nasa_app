import React from 'react';
import { NasaData } from '../../type/appTypes';
import "./Images.css"

export const Images = ({ data }: { data: NasaData[] }) => {
    console.log("data", data)
    
    return (
        <div>
            {data.map((item: NasaData, index: number) =>
                
                item.data[0].media_type === 'image' ?
                    <div key={index} className='card'>
                        <div className='card_title'>{item.data[0].title}</div>
                        <div className='image'>{item.href}</div>
                    </div>
                    :
                    <div className='no_image'>NO IMAGE AVAILABLE!!</div>
            )}
        </div>
     );
}
 
