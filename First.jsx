import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>

      <h1>LOGIN PAGE</h1>
      <input type="text" placeholder='username' />
      <br/><br />
      <input type="password" placeholder='pasword' />
      <br /><br />
      <button>Login</button>
      <br />
      <br />
      <br />

      <Typography variant="h6">Login page</Typography>
      <br /><br />
      <TextField variant="outlined" label='username'/>
      <br /><br />
      <TextField variant="filled" label='password'/>
      <br /><br />
      <TextField variant="standard" label='confirm password'/>
      <br /><br />
      <Button variant="text">login</Button> &nbsp;&nbsp;
      <Button variant="contained" color="success">Login</Button> &nbsp;&nbsp;
      <Button variant="standard" color="error">Login</Button>
    </div>
  );
  };

export default First
