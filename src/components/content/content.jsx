import React from 'react'
import {Grid} from '@material-ui/core'
import {Cards} from '../cards-component/cards'

export const Content = () => {
    return (
   <Grid container > 
        <Grid item xs={12} sm={4}>
            <Cards/>
        </Grid>             
         <Grid item xs={12} sm={4}>
            <Cards/>
        </Grid>
         <Grid item xs={12} sm={4}>
            <Cards/>
         </Grid>          
     </Grid>
    )
}
