import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import { Navbar } from './components/navbar-component/navbar';
import {Content} from './components/content/content'
// import Typography from '@material-ui/core/Typography';
import {Section} from './components/section/section'
function App() {
  return (
    <Grid container direction="column">
        <Grid item>
            <Navbar/>
        </Grid>
        <Grid item >
          <Section/>
        </Grid>
        <Grid item container >
            <Grid item sm={2} xs={false}/>
            <Grid item container xs={12} sm={8} >
                <Content/>
            </Grid>
            <Grid item container xs={false} sm={2}/>
        </Grid>
    </Grid>
  );
}

export default App;
