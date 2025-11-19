import React, { useEffect, useState } from 'react';
import apodApiCall from '../../api/apodApiCall';
import { ApodData } from '../../type/appTypes';
import moment from 'moment';

import "./Apod.css"

export const Apod = () => {
    const [apod, setApod] = useState<ApodData>()

    useEffect(() => {
        apodApiCall.get(`apod?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => setApod(res.data))
    }, [])

    const dateFormatted = moment(apod?.date).format('MMMM Do YYYY');
    const IMAGE_NOTFOUND_PLACEHOLDER = 'https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png';


    return (
        <>
            <div className='apod_main_container'>
                <h1 className='apod_page_title'>Astronomy Picture of the Day</h1>
                {apod &&
                    <div className='apod_card'>
                        <h2 className='apod_title'>{apod.title}</h2>
                        <p className='date'>{dateFormatted}</p>
                        {apod.media_type === 'image' &&
                            <div className='image_container'>
                                <img
                                    className="apod_img"
                                    src={apod.hdurl || IMAGE_NOTFOUND_PLACEHOLDER}
                                    alt={apod.title || 'Apod Image'}
                                    loading='lazy'
                                    onError={(e) => e.currentTarget.src = IMAGE_NOTFOUND_PLACEHOLDER}
                                />

                            </div>
                            
                        }
                        <div className='explanation'>{apod.explanation}</div>
                    </div>


                }

            </div>
        </>
    );
}

