import React from 'react';
import {Theme, createStyles} from '@material-ui/core'
import {  makeStyles} from '@material-ui/core/styles';
import Background from '../../images/banner.png';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme )=>createStyles({
    content: {
        overflow:"hidden",
        display:"flex",
        flexGrow: "1",
        padding: theme.spacing(3),
        height: '100vh',
        justifyContent:"center",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        color:"white"
      },
      [theme.breakpoints.down('lg')]: {
        width: "100%",
        height: "auto",
      },
      [theme.breakpoints.up('sm')]: {
        height: '100%'
      },
      main:{
        paddingTop:"50px",
      },
      heading:{
          // lineHeight:"30px",
          textTransform:"capitalize",
          fontSize:"55px",
          textAlign:"center",
          letterSpacing:"2px",
      },
      text:{
        letterSpacing:"1px",
        textAlign:"center",
        fontSize:"22px",
        fontWeight: "300",
        lineheight: "33px",
        maxWidth: "950px",
    },
     button:{
        marginRight:"15px",
        fontWeight:"5",
        height:"45px",
        textAlign:"center",
        backgroundColor:' #cc0c1b',
        color:'white',
        borderRadius:"25px 25px",
      },
     btngr:{
       display:"flex",
       justifyContent:"center",
       flexWrap:"wrap"
      },

}))

export const Section = () => {
    const classes = useStyles()
    return (
            
        <div className={classes.content}>
          <div className = {classes.main}>
            <h1 className={classes.heading}>Coronavirus disease (COVID-19) outbreak</h1>
            <p className={classes.text}>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>              
                <div className={classes.btngr}>
                <Button variant="contained" className={classes.button}>how to protect</Button>  
                <Button variant="contained" className={classes.button}>About covid-19</Button>  
                </div>
         </div>
        </div>   
        

    )
}
