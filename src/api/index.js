import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let chaneableurl=url;
        if(country){
            chaneableurl=`${url}/countries/${country}`
        }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(chaneableurl);
        

        /*
           just like
            const {data}=await axios.get(url)
             const modifieddata={
             confirmed:data.confirmed
             recoverd:data.recoverd
             deaths:data.deaths
                               }
         */

        // const modifiedData = { confirmed,recovered,deaths}
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error)

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;

    } catch (error) {

    }
}

export const fetchCountries=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);
       
       return countries.map((country)=>country.name)

    } catch (error) {
        
    }
}
