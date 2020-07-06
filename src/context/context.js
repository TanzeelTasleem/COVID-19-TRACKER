import React,{ createContext,useReducer } from 'react'
import {dataReducer} from './reducer'

const initialState={
    countries:[null],
    data:{
        confirmed:0,
        recovered:0,
        deaths:0,
        lastUpdate: null
    },
    loading:true,
    countryData:{
        confirmed:0,
        recovered:0,
        deaths:0,
        lastUpdate: null,
        loading: true 
    }
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider=({children})=>{
     
    const [state, dispatch] = useReducer(dataReducer,initialState)
    
    const updateData=({confirmed,recovered,deaths,lastUpdate})=>{
        dispatch({
           type:"TO_UPDATE_DATA",
           payload:{
                data:{       
                    confirmed: confirmed.value,
                    recovered: recovered.value,
                    deaths: deaths.value,
                    lastUpdate : lastUpdate 
                },
                loading:false,
                
           }
        })
    }

    const updateCountryName=({countries})=>{
        const names = countries.map(obj=>obj.name)
        dispatch({
            type:"TO_UPDATE_COUNTRY_NAMES",
            payload: names
        }) 
    }

    const updateCountryData=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
         dispatch({
             type:"TO_UPDATE_COUNTRY_DATA",
             payload:{ 
                      confirmed: confirmed.value,
                      recovered: recovered.value,
                      deaths: deaths.value,
                      lastUpdate : lastUpdate,
                      loading:false
             }
         })
    }

    return(
        <GlobalContext.Provider value={{
            data:state.data,
            loading:state.loading,
            countryData:state.countryData,
            countries:state.countries,
            updateData,
            updateCountryName,
            updateCountryData,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
