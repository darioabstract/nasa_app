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
                                    img.href.endsWith('small.jpg') &&
                                        <img src={img.href ? img.href : "https://www.runningin.info/wp-content/uploads/2018/07/no-image.jpg"} alt='nasa_img' />                 )
                            })}</div>
                            <h1>{item.data[0].title}</h1>
                    </div>
               )
           })}
        </div>
    );
}
 
