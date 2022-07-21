//rafce
import React, { useEffect, useState } from 'react'
import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({ category }) => {
  
  const{ images, isLoading } = useFetchGifs (category);

  console.log({ images , isLoading})
    
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando ... </h2>)
        }
       
        {/* images.map ..*/}
        <div className='card-grid'>

            {
                images.map ((image) => (
                
                    <GiftItem key={image.id} {...image}
                    // title={ image.title }
                    // url= {image.url}
                    />
                ))

            }
            
        </div>
           



    </>
    
  
  )
}
