import React from 'react';
import { NasaData } from '../../type/appTypes';
import "./ImageCard.css"

export const ImageCard = ({ data }: { data: NasaData[] }) => {
    console.log('data', data)
  

  
    return (
        <div className='cards_container'>
            {data.map((item) => {
                return (
                    item.data[0].media_type === 'image' &&
                    <div className='card'>
                            <div className='image_container'>{item.links.map((img) => {
                                return (
                                    img && img.href.endsWith('thumb.jpg') &&
                                        <img src={img.href} alt='nasa_img' />                 )
                            })}</div>
                            <div className='title'>{item.data[0].title}</div>
                    </div>
               )
           })}
        </div>
    );
}
 
