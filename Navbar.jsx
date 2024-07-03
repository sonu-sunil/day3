import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          
          <Button color="inherit"><Link to={'/r'} style={{textDecoration:'none',color:'white'}}>Registration</Link></Button>
          <Button color="inherit"><Link to={'/t'} style={{textDecoration:'none',color:'white'}}>Table</Link></Button>
          <Button color="inherit"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>First</Link></Button>
          <Button color="inherit"><Link to={'/s'} style={{textDecoration:'none',color:'white'}}>Statebasic</Link></Button>
          <Button color="inherit"><Link to={'/x'} style={{textDecoration:'none',color:'white'}}>Counter</Link></Button>
          <Button color="inherit"><Link to={'/k'} style={{textDecoration:'none',color:'white'}}>New</Link></Button>
          <Button color="inherit"><Link to={'/f'} style={{textDecoration:'none',color:'white'}}>FormBasics</Link></Button>
          <Button color="inherit"><Link to={'/g'} style={{textDecoration:'none',color:'white'}}>ApiGet</Link></Button>
          <Button color="inherit"><Link to={'/c'} style={{textDecoration:'none',color:'white'}}>GridCard</Link></Button>
        </Toolbar>
      </AppBar> 
      </Box>
    </div>
  )
}

export default Navbar
