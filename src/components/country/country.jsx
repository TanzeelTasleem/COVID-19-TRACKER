import React,{useContext} from 'react'
import {Box, Typography,Theme } from "@material-ui/core" 
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../images/blue.jpg'
import {Select} from '../countrySelect/Select'
import { GlobalContext } from '../../context/context';
import CountUp from 'react-countup';
import {CountryChart} from '../globalchart/countryChart/countryChart'
import {ReactComponent as ConfirmedLogo} from '../../images/icons/confirmed.svg'
import {ReactComponent as RecoveredLogo} from '../../images/icons/recovered.svg'
import {ReactComponent as DeathLogo} from '../../images/icons/death.svg'

const useStyles = makeStyles((theme: Theme )=>createStyles({
   Background: {
      padding: theme.spacing(1),
      minHeight:"100vh",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      color:"white",
      display:"flex",
      flexDirection:"column",
      },
      [theme.breakpoints.down('lg')]: {
      height: "100vh",
      },
      [theme.breakpoints.up('sm')]: {
      height: '100%'
      },
      head:{
          display:"flex",
          justifyContent:"center",
      },
      logo:{
         height:"35px",
         width:"35px"
      }

 }))    
export const Country = () => {
   const classes = useStyles() 
   const {countryData:{confirmed,recovered,deaths,lastUpdate,loading}} = useContext(GlobalContext)
   
   return (
            <Box className={classes.Background}>
                 <Box mt={2} className={classes.head}>
                    <Typography variant="h4" style={{textAlign:"center"}}>Country stats of COVID-19 </Typography>
                 </Box>
                 <Box display="flex" justifyContent="center">
                        <Select/>
                 </Box>
               <Box mt={10} display="flex" flexWrap="wrap" justifyContent="space-around">
                    <Box width="400px" height="300px" >
                      <Box width="100%" display="flex" height="100px" >
                         <Box >
                           <ConfirmedLogo className={classes.logo} />
                         </Box>
                         <Box ml={2} >
                           <Typography variant="h5" style={{fontWeight:"500" , textTransform:"uppercase"  }}>inffected</Typography>
                           <Typography> { loading ? "last update" : new Date(lastUpdate).toDateString()}</Typography>
                           <Typography variant="h6" >{ loading ? "Select a country" : <span style={{fontWeight:"500" , fontSize:"30px"}}><CountUp start={0} end={confirmed} separator="," duration={2} /></span>}</Typography>
                         </Box>
                      </Box>
                      <Box width="100%" mt={2} display="flex" height="100px" >
                         <Box width="30px" >
                           <RecoveredLogo className={classes.logo}/>
                         </Box>
                         <Box ml={2} mb={3}  textTransform="uppercase">
                           <Typography variant="h5" style={{fontWeight:"500" , textTransform:"uppercase"  }}> Recovered </Typography>
                           <Typography> { loading ? "last update" : new Date(lastUpdate).toDateString()}</Typography>
                           <Typography variant="h6" >{ loading ? "Select a country" : <span style={{fontWeight:"500" , fontSize:"30px"}}><CountUp start={0} end={recovered} separator="," duration={2} /></span>}</Typography>
                         </Box>
                      </Box>
                      <Box mt={2}  width="100%" display="flex" height="100px" >
                         <Box width="40px" >
                           <DeathLogo className={classes.logo}/>
                         </Box>
                         <Box ml={1} mb={10}>
                           <Typography variant="h5" style={{fontWeight:"500" , textTransform:"uppercase"  }}> Deaths</Typography>
                           <Typography> { loading ? "last update" : new Date(lastUpdate).toDateString()} </Typography>
                           <Typography variant="h6" >{ loading ? "Select a country" : <span style={{fontWeight:"500" , fontSize:"30px"}}><CountUp start={0} end={deaths} separator="," duration={2} /></span>}</Typography>
                         </Box>
                      </Box>
                    </Box>
                    <Box >       
                        <CountryChart/>
                    </Box> 
               </Box>    
            </Box>
    )
}
