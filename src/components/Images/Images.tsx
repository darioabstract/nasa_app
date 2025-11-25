import React, { useState } from 'react';
import { NasaCard } from '../../type/appTypes';
import { ImageCard } from '../imageCard/ImageCard';
import "./Images.css";
import { SearchBar } from '../SearchBar/SearchBar';
import { getImages } from '../../hooks/getImages';

export const Images = () => {
  const [nasamedia, setNasaMedia] = useState<NasaCard[]>([]);
  const [queryValue, setQueryValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const data = await getImages(queryValue);
    setNasaMedia(data);

    setLoading(false);
  };

  const handleClick = () => {
    setQueryValue('');
    setNasaMedia([]);
  };

  return (
    <>
      <SearchBar
        queryValue={queryValue}
        setQueryValue={setQueryValue}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      {loading ? (
        <div className="loading">Loading images...</div>
      ) : queryValue && nasamedia.length > 0 ? (
        <ImageCard data={nasamedia} />
      ) : (
        <div className='no_query'>
          Please Search Some NASA Images!!
          <div>
            <img
              className="astronaut"
              src="https://www.nasa.gov/wp-content/uploads/2025/05/54492396655-c6ba83df1d-o-1.jpg"
              alt="astronaut"
            />
          </div>
        </div>
      )}
    </>
  );
};
