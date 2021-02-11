
import styles from '../styles/Home.module.css'

function BorderImageCard({border})
{
   return (
       <div >
        <img src={border.country1.flag} width="200px" height="120px" style={{margin:"10px"}}/>
        
         
       </div>
        

   )

}


function BorderCountries({borders}){

if(!borders){
  return null
}

return (
	<div className={styles.borderContainer}>
     <h3>Neighbour Countries</h3>
   <div className={styles.grid}>

       {
 
	borders.map(border=><BorderImageCard key={border.country1.name} border={border}/>)
           }
   </div>

   </div>
	)

}


export default BorderCountries
