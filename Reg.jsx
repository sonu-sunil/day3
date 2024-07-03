import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const reg= () => {
  return (
    <div>
    <Typography variant="h2">Registration form</Typography>
      <br /><br />
     <TextField variant="filled" label='username'/>
     <br /><br />
     <TextField variant="filled" label='age'/>
     <br /><br />
     <TextField variant="filled" label="father's name " />
     <br /><br />
     <TextField variant="filled" label="mother's name "/>
     <br /><br />
     <TextField variant="filled" label='password'/>
     <br /><br />
     <TextField variant="standard" label='confirm password'/>
     <br /><br />
     <Button variant="contained" color ="success">Login</Button>
     </div>
  )
}

export default reg
