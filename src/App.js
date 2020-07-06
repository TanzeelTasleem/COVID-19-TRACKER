import React , {Suspense} from 'react';
import { Navbar } from './components/navbar-component/navbar';
import {GlobalProvider} from './context/context'
import {Section} from './components/section/section'
import {Country} from './components/country/country'
import {GlobalChart } from './components/globalchart/globalChart'
import {Footer} from './components/footer/footer'

// const Section = React.lazy(()=> import('./components/section/section')) 
// const Country = React.lazy(()=> import('./components/country/country')) 
// const GlobalChart = React.lazy(()=> import('./components/globalchart/globalChart')) 


const App=()=>{
    
  return (
      <GlobalProvider>
         <div>
            <Navbar/>
                <Suspense fallback={<h1> loadingData...</h1>}>
                <Section/>
                <Country/>
                <GlobalChart/>
            </Suspense>
            <Footer/>
         </div>
      </GlobalProvider> 
     
  );
}

export default App;
