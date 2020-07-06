import React , {useContext,useEffect,useState} from 'react'
import {NativeSelect,InputLabel} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles} from "@material-ui/core/styles";
import { GlobalContext } from '../../context/context';
import {fetchCountries,fetchCountryCases} from '../../api/api'

const useStyles = makeStyles({
        select:{
            backgroundColor:"white",
            width: 250

        }
})
export const Select = () => {
    const classes=useStyles() 
    const [countryName,setcountryName]=useState("") 
    const {updateCountryName,countries,updateCountryData} = useContext(GlobalContext)
    
    useEffect(() => {
        const countries = async()=>{
        const name = await fetchCountries();
        console.log(name)
        updateCountryName(name.data)
    }
     countries()
    }, [])

    const onSelect=async({target:{value}})=>{
         const countryCases = await fetchCountryCases(value)
         console.log(value)
         updateCountryData(countryCases)
         setcountryName(value)
         console.log(countryCases)
   }

  // if(loading){
  //     return(<h1>loading countries name ...</h1>)
  // }    
    return (
        <FormControl>
            <InputLabel
            >
             Select Country
            </InputLabel>
            <NativeSelect
              value=""
              className={classes.select}
              onChange={(event)=>{onSelect(event)}} 
            > 
              <option aria-label="None" value="">
                &nbsp; {countryName === "" ? "Select Country" : countryName}
              </option>
              {countries.map((name,index)=><option value={name} key={index}> &nbsp;{name}</option>)}
            </NativeSelect>
        </FormControl>
        
    )
}

