 import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Card({countryCard}){

	return (<div className={styles.card}>
             
               <img src={countryCard.flag} width="100%" height="100%"/>
        <div className={styles.showCountryCard}>      <h5 >{countryCard.name}</h5>
           <p >Currency :{countryCard.currencies[0].name}</p>
           <div className={styles.showCountryCardButton}>      
           <Link href={`./googleMap?lat=${countryCard.latlng[0]}&lo=${countryCard.latlng[1]}`}><button >Show Map</button></Link>
           <Link href={`./countries?title=${countryCard.alpha3Code}`}><button >Details</button></Link>

            </div>
</div>
		</div>)
}

 const ShowCountries=({country})=>{
  if(!country){
    return null
   }

	return (<div >



{


       country.map(countr=>(<Card countryCard={countr}/>))
  }

    </div>)
}
export default ShowCountries

// <Link href={`./countries?title=${countryCard.name}`}><a>{countryCard.name}</a></Link>
