import { useState, useRef, useEffect } from 'react';
import './form.style.css'
import { TextField, Button } from "@mui/material";
export const Form = ({onSubmit}) => {

    const [value, setValue]= useState(" ")

    const inputRef = useRef();

    const hendlerSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue("")
    }

    useEffect(()=>{
        inputRef.current?.focus()
    })

    const hendlerChange =(e) => {
        setValue(e.target.value)
    }

    return(
        <form onSubmit={hendlerSubmit}>
            {/*<input className='textForm' value={value} onChange={hendlerChange} type="text" ref={inputRef}></input>*/}
            <TextField value={value} onChange={hendlerChange} inputRef={inputRef} size="small" />
            <Button variant="contained" type="submit"  size="normal" sx={{ height:40}}>Submit</Button>
        </form>
    )
}