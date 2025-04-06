 
import { languages } from "./languages"


export default function App() {

  const langs=languages.map((lang)=>{
   const styles={
      backgroundColor:lang.backgroundColor,
      color:lang.color
    }
    return(
      <span className="chips" style={styles}>{lang.name}</span>

    )

     
  })
  return (
    
  <main>
   <header>
    <h1>Assembly:Endgame</h1>
    <p>Guess the word within 8 attempts to keep the programming world safe from assembly!</p>
   </header>

   <div className="status">
    <h3>You Win!</h3>
    <p>Well Done!</p>
   </div>

   <div className="languages">
    {langs}

   </div>
   

  </main>
  )
  
}

