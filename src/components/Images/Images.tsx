import React from 'react';
import { NasaData } from '../../type/appTypes';
import { ImageCard } from '../imageElement/ImageCard';
import "./Images.css"

export const Images = ({ data }: { data: NasaData[] }) => {
    
    return (
        <ImageCard data={data} />
     );
}
 
