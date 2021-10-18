import { useEffect, useState, useCallback } from "react";


export const useFetchImgs = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState('cats');
    const [isLoading, setIsLoading] = useState(true);
    const peticion = useCallback(async () => {

        const KEY = 'client_id=GF2vb5iFs_US0pa7Tky7llUWidzehtYXatU9TvBZxT0';
        let route = `https://api.unsplash.com/photos?${KEY}`;
        
        

        if(input !== ''){
            route =`https://api.unsplash.com/search/photos?query=${encodeURI(input)}&${KEY}`;
        }

        setIsLoading(true);

        const res = await fetch(route);
        const data = await res.json();

        if(data.results){
            setImages(data.results);
        }else{
            setImages(data);
        }

        setIsLoading(false);
    },[input]);

   
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target[0].value;
    
        setInput(text); 
    }

    useEffect(()=>{
         peticion();
    }, [peticion]);

    return [images, isLoading, handleSubmit];
}