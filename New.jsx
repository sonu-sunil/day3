import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var[data,setData]=useState("click the button");
    const home = () =>{
        console.log("home");
        setData("home")
    };
    const Gallery = () =>{
        console.log("Gallery");
        setData("Gallery")
    };
    const contact = () =>{
        console.log("contact")
        setData("contact")
    };
  return (
   < div style={{marginLeft:"0%",marginTop:"10%",textAlign:"center"}}>
    <Typography variant="h4"> &nbsp;
    welcome to  {data}
    </Typography>
    <br />
    <br />
    <Button variant="contained"onClick={home}>
        Home page
        </Button>&nbsp;&nbsp;
    <Button variant="contained" color="secondary"onClick={Gallery}>Gallery</Button>&nbsp;&nbsp;
    <Button variant="contained" color="error"onClick={contact}>contact</Button>&nbsp;&nbsp;
   </div>
      
    
  )
}
export default New