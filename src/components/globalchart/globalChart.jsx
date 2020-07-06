import React,{useContext} from 'react'
import {Bar,defaults} from 'react-chartjs-2'
import {GlobalContext} from '../../context/context'
import { Box } from '@material-ui/core'

defaults.global.maintainAspectRatio = false

export const GlobalChart = () => {
    
    const{data:{confirmed,recovered,deaths}}=useContext(GlobalContext)

    const chart ={
        labels:['Confirmed','Recovered','Deaths'],
        datasets:[{
            label:"Coronavirus Cases",
            data:[confirmed,recovered,deaths],
            backgroundColor: ['#365070','#3f8a53','#cc2b23'],
            borderColor: 'black',
            borderWidth: 2,
        }
    ]
    }

    return (
        <Box height="60vh">
            <Bar
            data={chart}
            options={{
                title:{
                    display:true,
                    responsive: true,
                    text:"Global Cases of Covid-19",
                    fontSize: 20
                },
                legend:{
                    display:true,
                    position:'top'
                }
            }}
            />
           </Box>
           )
}

