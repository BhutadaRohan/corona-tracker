import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import { fetchCountries } from '../../api';

import Styles from './countrypicker.module.css'

const Countrypicker =({handleCountryChange})=>{
    const [FetchCountries,setFetchCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async ()=>{
            setFetchCountries(await fetchCountries());
        }

        fetchAPI();
    },[setFetchCountries]);

    return (
        <FormControl className={Styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {FetchCountries.map((country,i)=><option key={i}value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};
export default Countrypicker