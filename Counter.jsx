import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
  var [count,setCount] =useState(0);
  const inc =() =>{
    console.log("inc clicked");
    setCount(++count)
  };

  const dec = () => {
    console.log("dec clicked");
    setCount(--count)
  };
  return (
    <div style={{ marginLeft:"45%",marginTop:"10%",textAlign:"centre"}}>
      <Typography variant="h1" style={{marginLeft:"5%"}}>
        {count}
      </Typography>
      <br />
      <br />
    <Button variant="contained" color="success"onClick={inc}>
      +
      </Button>
    &nbsp;&nbsp;
    <Button variant="contained" color="error" onClick={dec}>
    -
    </Button>

    </div>
  );
};
export default Counter