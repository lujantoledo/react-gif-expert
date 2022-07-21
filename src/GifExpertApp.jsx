//import React from 'react'
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    
     
    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory) ) return alert('YA existe la categoria');
        setCategories( cat => [ newCategory, ...cat] ); //si

        //setcategories([...categories, 'Manzana']);
        //setcategories(categories.concat('Manzana') );SI 
       // setcategories([...categories, 'Manzana'] );
        
      // categories.push(newCategory ); //NO
     }

     console.log( categories )
     
    return (
    <>
         {/* Titulo */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        {/* <input type="text" /> */}
        <AddCategory onNewCategory= { onAddCategory } />


         {/* agregarCategoria= { setCategories } */}
        

        {/* Listado de Gift */}
        {/* <button onClick={  onAddCategory } >Agregar</button> */}
        <ol>
            
          { 
          categories.map ( (category) => (

                        <GifGrid key= {category} category= {category}/>
                    // <div key={ category }>
                    //     <h3>{category}</h3>
                    //     <li > {category} </li>
                    // </div>
                )  //<li key={ category }> {category} </li>

          ) 
          }
            
        </ol>
            {/* GitItem */}

    </>
    
  )
}
