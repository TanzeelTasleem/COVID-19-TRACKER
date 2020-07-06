import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchapi = async()=>{
   
    try{

    const response = await axios.get(url)
    return response.data
   
}
   catch(err){
       return err 
   }
}

export const fetchCountries=async()=>{
    try{
        const countries = await axios.get(`${url}/countries`)
        return countries
    }
    catch(err){
        return err
    }
}

export const fetchCountryCases = async(country)=>{
    try{
        const countryCases = await axios.get(`${url}/countries/${country}`)
        return countryCases
    }
    catch(err){
        return err
    }

}