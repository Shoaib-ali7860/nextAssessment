import styles from '../styles/Home.module.css'
function CountryDescription({country1}){
 
 return (<div className={styles.grid}>
       <div className={styles.card}>
          <img className={styles.flagImg} src={country1.flag}/>
          <div className={styles.flagContain}>

                <p><h4 style={{display:"inline "}}>Native Name1 : </h4>{country1.nativeName}</p>
                 <p><h4 style={{display:"inline "}}>Capital : </h4>{country1.capital}</p>
                  <p><h4 style={{display:"inline "}}>Population : </h4>{country1.population}</p>
                   <p><h4 style={{display:"inline "}}>Region : </h4>{country1.region}</p>
                    <p><h4 style={{display:"inline "}}>Sub region : </h4>{country1.subregion}</p>
                     <p><h4 style={{display:"inline "}}>Area : </h4>{country1.area}km^2</p>
                      <p><h4 style={{display:"inline "}}>Country Code : </h4>{country1.callingCodes[0]}</p>
                       <p><h4 style={{display:"inline "}}>Currencies : </h4>{country1.currencies[0].name}</p>
                        <p><h4 style={{display:"inline "}}>Time Zones : </h4>{country1.timezones[0]}</p>
               
          </div>
       </div>

 	</div>)
}

export default CountryDescription