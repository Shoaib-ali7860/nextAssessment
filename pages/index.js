import Head from 'next/head'
import ShowCountries from './showCountries'
import styles from '../styles/Home.module.css'
// import Countries from './countries.js'
import {useState} from 'react'

import React from 'react'







function Index({comm}) {

  const [keyword,setKeyword]=useState("")
const filterContries=comm.filter(country=>country.name.toLowerCase().includes(keyword))

const OnDataChange=(e)=>{
  e.preventDefault()
  console.log(e.target.value.toLowerCase())
  setKeyword(e.target.value.toLowerCase())
}

  return (<div className={styles.container}>
       <h1>Countries</h1>
       <input type="text" style={{width:"350px"}} onChange={OnDataChange} placeholder="enter Country name"/>
    <ShowCountries country={filterContries}/>


    </div>)
}












//=====================================================================================
Index.getInitialProps = async (ctx) => {

 

const res = await fetch('https://restcountries.eu/rest/v2/all')
    const comm = await res.json()


    
    return {comm}
  
}


export default Index
