import React,{useContext} from 'react'
import {Doughnut,defaults} from 'react-chartjs-2'
import {Box} from '@material-ui/core'
import {GlobalContext} from '../../../context/context'

defaults.global.maintainAspectRatio = false

export const CountryChart = () => {
    const {countryData:{confirmed,recovered,deaths,loading}} = useContext(GlobalContext)
     const chartData = {
         labels:["Confirmed", "Recovered", "Deaths"],
         datasets:[{
             label: "Country Cases",
             data:[confirmed,recovered,deaths],
             backgroundColor: ['#1cb0eb','#3f8a53','#cc2b23'],
             borderColor: 'black',
             borderWidth: 2,
         }]
     }
     if (loading){
         return (<h1 style={{textAlign:"center"}}>Select A Country To <br/> Veiw A Chart </h1>)
     }
    return (
        <Box height="60vh" width="40vw">
           <Doughnut
            data = {chartData}
            options={{
                title:{
                    display:true,
                    responsive: true,
                    text:"Country Cases of Covid-19",
                    fontSize: 20,
                    fontColor:"white"
                },
                legend:{
                    display:true,
                    position:'top',
                }
            }}
           />
        </Box>
    )
}
