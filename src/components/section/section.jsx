import React,{useEffect,useContext} from 'react';
import {Theme, createStyles,Box,Typography} from '@material-ui/core'
import {  makeStyles} from '@material-ui/core/styles';
import Background from '../../images/banner.png';
import CountUp from 'react-countup';
// import Button from '@material-ui/core/Button'
import {GlobalContext} from '../../context/context'
import {fetchapi} from '../../api/api'

const useStyles = makeStyles((theme: Theme )=>createStyles({
    content: {
        overflow:"hidden",
        padding: theme.spacing(3),
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        color:"white"
      },
      [theme.breakpoints.down('lg')]: {
        height:"100%"
      },
      [theme.breakpoints.up('sm')]: {
        height: '100%'
      },
      main:{
        paddingTop:"50px",
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"column",
        alignItems:"center"
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
    }

}))

export const Section = () => {
    const classes = useStyles()
    const {updateData,data}=useContext(GlobalContext);
 
   useEffect(()=>{
     const fetchData=async()=>{
        const response = await fetchapi()
        console.log(response.lastUpdate)
        updateData(response)
     }
      fetchData()
    // eslint-disable-next-line
    },[]);
    

  //  if(loading){
  //  return(<h1>loading ...</h1>)
  //  }
   
   return (
            
        <Box className={classes.content}>
          <Box className = {classes.main}>
            <Typography className={classes.heading}>Coronavirus disease (COVID-19) outbreak</Typography>
            <Typography className={classes.text}>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</Typography>              
            </Box >
               <Box mt={10} display="flex" justifyContent="space-around" flexWrap="wrap">
                  <Box mb={2} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h4" style={{fontWeight:"500" , textTransform:"uppercase" , letterSpacing:"-1px"}}> World Wide cases</Typography>
                     <Typography style={{fontWeight:"500"}} >{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="h3" style={{fontWeight:"500"}} > <CountUp start={0} end={data.confirmed} separator="," duration={4} /> </Typography>
                  </Box>
                  <Box mb={2} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h4" style={{fontWeight:"500" , textTransform:"uppercase" , letterSpacing:"-1px" }}>Recovered</Typography>
                    <Typography style={{fontWeight:"500"}} >{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="h3" style={{fontWeight:"500"}} > <CountUp end={data.recovered} separator="," duration={4} /> </Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h4" style={{fontWeight:"500" , textTransform:"uppercase" , letterSpacing:"-1px" }}>Deaths</Typography>
                    <Typography style={{fontWeight:"500"}}>{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="h3" style={{fontWeight:"500"}} > <CountUp end={data.deaths} separator="," duration={4} /> </Typography>
                  </Box>
               </Box>
        </Box>   
        

    )
}
