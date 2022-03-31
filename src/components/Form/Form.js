import { useState } from 'react';
import './form.style.css'
export const Form = ({onSubmit}) => {

    const [value, setValue]= useState()

    const hendlerSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue("")
    }

    const hendlerChange =(e) => {
        setValue(e.target.value)
    }

    return(
        <form onSubmit={hendlerSubmit}>
            <input className='textForm' value={value} onChange={hendlerChange} type="text"></input>
            <input className='submitForm' type="submit"></input>
        </form>
    )
}