
import styles from '../styles/Home.module.css'

function BorderImageCard({border})
{
   return (
       <div className={styles.card}>
        <img src={border.country1.flag} width="200px" height="120px"/>
        <p>{border.country1.name}</p>
         
       </div>
        

   )

}


function BorderCountries({borders}){

return (
	<div>
     <h3>borders</h3>
   <div className={styles.grid}>

       {
 
	borders.map(border=><BorderImageCard key={border.country1.name} border={border}/>)
           }
   </div>

   </div>
	)

}


export default BorderCountries