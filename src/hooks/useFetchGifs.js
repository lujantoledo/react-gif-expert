import React, { useEffect, useState } from 'react';
import{ getGifs} from '../helpers/getGifs';

//un hooks no es mas que una funcion
export const useFetchGifs = ( category) => {
  

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState( true ) 

  const getImages = async() =>{
    const newImages = await getGifs ( category )
      setImages(newImages);
      setIsLoading(false);
        
  }


   useEffect (()=>{
     getImages();
     
  }, []) //hace que no vuelva a hacer una peticicion http 
  




    return{
        images,
        isLoading
    }

}
