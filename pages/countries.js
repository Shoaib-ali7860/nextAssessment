// import fetch from "isomorphic-fetch"
import React from 'react'
import BorderCountries from './borderCountries'
import CountryDescription from './countryDescription'
import styles from '../styles/Home.module.css'
import {useEffect,useState} from 'react'

const getCountry=async (title)=>{

     const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${title}`)
    const country1 = await res.json()
    return {country1}

}
function Countries({country1}){
const [borders,setBorders]=useState([])
const getBorder= async () =>{
	 const borders=await Promise.all(country1.borders.map(border=>getCountry(border)))
	 setBorders(borders)
}

useEffect(()=>{

	getBorder()
},[])
// const {name}=country1

   // const borders=country1.borders
  


	return <div className={styles.container}><h2 >Country Name : {country1.name}</h2>  
<CountryDescription country1={country1}/>
<BorderCountries borders={borders}/>
	</div>



}
Countries.getInitialProps=async ({query})=> {
  // const res = await fetch(`https://restcountries.eu/rest/v2/alpha/irn`)
    const country1 = await getCountry(query.title)


    
    return country1
}

   


    
  


export default Countries 