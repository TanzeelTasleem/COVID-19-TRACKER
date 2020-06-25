import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from '../../images/covid.png'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    logo:{
     justifyContent:"space-between",
     alignItems:"center", 
     flexWrap:"wrap"  
    },
    img:{
      // width:"25px",
      // height:"25px",
        },
    main:{
      fontWeight:"5",
      height:"40px",
      textAlign:"center",
      backgroundColor:' #cc0c1b',
      color:'white',
      letterSpacing:"1.2px",
      borderRadius:"20px 20px",
    }

})

export const Navbar=()=>{
const classes=useStyles()
  return (

       <AppBar position="static" style={{ backgroundColor: 'darkblue' , padding:'10px'}} >
         <Toolbar className={classes.logo}>
           <div>
             <Button><img className={classes.img} src={Image} alt="Icon"/></Button>
            </div>
            <Button variant="contained" className={classes.main} disableElevation> Do & Dont's</Button>
        </Toolbar> 
       </AppBar>
      
  );
}