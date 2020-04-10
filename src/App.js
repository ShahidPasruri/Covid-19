import React from 'react';
import {Cards,Chart,CountryPicker,Footer} from './components'
import styles from './App.module.css'
import {fetchData} from './api/index'
import caronaimage from './images/covid-19.png'

class App extends React.Component{
state={
    data:{},
    country:'',
}

async componentDidMount(){
const data= await fetchData();
this.setState({data:data})


}

handleCountryChange= async(country)=> {
    const data= await fetchData(country);
    this.setState({data:data,country:country})
    
}

    render(){
        const {data,country}=this.state;
        return (

            <div className={styles.container}> 
            <img src={caronaimage} className={styles.image} alt='Covid-19'/>
               <Cards data={data}/>
               <CountryPicker chnageHandle={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
               <Footer/>
               
            </div>
        )
    }

}
export default App;