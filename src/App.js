import React from 'react';

import {Cards,Chart,CountryPicker} from './components'
import Styles from './app.module.css'
import { fetchData } from './api'

class App extends React.Component{

    state ={
        data:{

        },
        country:'',
    }

    async componentDidMount(){
        const fetchdata = await fetchData();
        this.setState({data:fetchdata})
        
    }

    handleCountryChange = async (country) =>{
        //first fetch data 
        const fetchdata = await fetchData(country);
        //then set the state
        this.setState({data:fetchdata,country:country})
        
    }
     render(){
        
        const { data, country } = this.state;
         return(<div className={Styles.container}>
             <img alt="" src="https://ewscripps.brightspotcdn.com/dims4/default/3a108ca/2147483647/strip/true/crop/1280x672+0+21/resize/1200x630!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F9b%2F1c%2Fd6365aa54b5687a3cb1386a180db%2Fupdate-coronavirus-colorado-live-blog-covid19.png" className={Styles.image}></img>
             <div className={Styles.container}>
                 <Cards data={data}/>
                 <CountryPicker handleCountryChange={this.handleCountryChange} />
                 <Chart data={data} country={country}/>
             </div>
             </div>
         )
     }
 }

 export default App