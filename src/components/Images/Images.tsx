import React, {FormEvent} from 'react';
import { NasaData } from '../../type/appTypes';
import { ImageCard } from '../imageElement/ImageCard';
import "./Images.css"
import { SearchBar } from '../SearchBar/SearchBar';

export const Images = ({ data, queryValue, setQueryValue, handleSubmit, handleClick }: { data: NasaData[]; queryValue: string; setQueryValue: (value: string) => void; handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; handleClick: () => void; }) => {

    return (
        <>
            <SearchBar queryValue={queryValue} setQueryValue={setQueryValue} handleSubmit={handleSubmit} handleClick={handleClick} />
            <ImageCard data={data} />
        </>
    );
}
