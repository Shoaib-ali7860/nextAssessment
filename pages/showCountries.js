 import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Card({countryCard}){

	return (<div className={styles.card}>
             
               <img src={countryCard.flag} width="200px" />
              <p >country:{countryCard.name}</p>
           <p >Currency :{countryCard.currencies[0].name}</p>
                 
           <Link href={`./googleMap?lat=${countryCard.latlng[0]}&lo=${countryCard.latlng[1]}`}><button className={styles.a}>Map</button></Link>
           <Link href={`./countries?title=${countryCard.alpha3Code}`}><button className={styles.a1}>{countryCard.name}</button></Link>

		</div>)
}

 const ShowCountries=({country})=>{
if(!country)
 {
  return null
 }

	return (<div className={styles.grid}>



{
       country.map(countr=>(<Card countryCard={countr}/>))
  }

    </div>)
}
export default ShowCountries

// <Link href={`./countries?title=${countryCard.name}`}><a>{countryCard.name}</a></Link>
