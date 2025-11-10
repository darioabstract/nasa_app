import React, {FormEvent, useState} from 'react';
import { NasaData } from '../../type/appTypes';
import { ImageCard } from '../imageElement/ImageCard';
import "./Images.css"
import { SearchBar } from '../SearchBar/SearchBar';
import apiCall from '../../api/apiCall';

export const Images = () => {

    const [nasamedia, setNasaMedia] = useState<NasaData[]>([]);
      const [queryValue, setQueryValue] = useState<string>('');
    
    

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await apiCall.get(`search?q=${queryValue}`);
        const results = res.data.collection.items;
        const filteredImages = results.filter(
          (item: any) => item.data[0].media_type === 'image'
        );
        setNasaMedia(filteredImages);
      };
    
      const handleClick = () => {
        setQueryValue('');
      }

    return (
        <>
            <SearchBar queryValue={queryValue} setQueryValue={setQueryValue} handleSubmit={handleSubmit} handleClick={handleClick} />
            {queryValue ?
                <ImageCard data={nasamedia} /> :
                <div className='no_query'>
                    Please Search Some Nasa Images!!
                    <div>
                        <img  className="astronaut" src="https://www.nasa.gov/wp-content/uploads/2025/05/54492396655-c6ba83df1d-o-1.jpg" alt="astronaut"/>
                    </div>
                </div>}
        </>
    );
}
