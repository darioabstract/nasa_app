import React from 'react';
import { NasaCard } from '../../type/appTypes';
import "./ImageCard.css"


export const ImageCard = ({ data }: { data: NasaCard[] }) => {

    const IMAGE_NOTFOUND_PLACEHOLDER = 'https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png'

    return (
        <>

            {data ? <div className='cards_container'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='card'>
                            <div className='image_container'>


                                <img
                                    className="nasa_img"
                                    src={item.thumbUrl || IMAGE_NOTFOUND_PLACEHOLDER}
                                    alt={item.title || 'Nasa Image'}
                                    loading='lazy'
                                    onError={(e) => e.currentTarget.src = IMAGE_NOTFOUND_PLACEHOLDER}
                                />
                                
                            </div>
                            <div className='title'>{item.title || 'Title unavailable'}</div>
                        </div>
                    )
                })}
            </div> : <div>Search some Nasa Images !!</div>}
        </>

    );

}

