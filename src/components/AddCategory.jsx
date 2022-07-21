import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
const [inputValue, setInputValue] = useState('')

 
//*************************************************** */
    const  onInputChange = ({target}) => {
   // console.log(target.value)
    setInputValue(target.value )
  }
  

//*************************************************** */
  const onSubmit = (event) =>{
    event.preventDefault(); //esto evita que el navegador se refreque
   
    if ( inputValue.trim().length <= 1 ) return;
   // agregarCategoria( categories => [inputValue, ...categories ]);
   onNewCategory(inputValue.trim())
    setInputValue('');

}


    return (
        <form action="" onSubmit={onSubmit}>
            <   input type="text" 
                placeholder='Buscar gift'
                value={ inputValue }
                onChange={ onInputChange } 
                // onChange={ (event) => onInputChange(event)}
        
            />
        </form>
  )
}
