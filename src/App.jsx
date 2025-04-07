 
import { languages } from "./languages"
import React from "react"


export default function App() {
  const alphabets="abcdefghijklmnopqrstuvwxyz"

  const [currword,setcurrword]=React.useState("react")
  const [guessedletters,setguessedletters]=React.useState([])
  console.log(guessedletters)
  //function to handle click
  const handleclick=(e)=>{
    const newitem=e.currentTarget.innerText
    setguessedletters(prevletters=>[...prevletters,newitem])

  }


  const langs=languages.map((lang)=>{
   const styles={
      backgroundColor:lang.backgroundColor,
      color:lang.color
    }
    return(
      <span className="chips" style={styles}>{lang.name}</span>

    )

     
  })

  //functionn to handle click
  
  const words=currword.split("").map((word,index)=>{
    return (
      <span key ={index} className="letter">{word.toUpperCase()}</span>
    )
  })

  const keyboard=alphabets.split("").map((key)=>{
    return(
      <button onClick={handleclick} className="key">{key.toUpperCase()}</button>
    )
  })
  return (
    
  <main>
   <header>
    <h1>Assembly:Endgame</h1>
    <p>Guess the word within 8 attempts to keep the programming world safe from assembly!</p>
   </header>

   <section className="status">
    <h3>You Win!</h3>
    <p>Well Done!</p>
   </section>

   <section className="languages">
    {langs}

   </section>

   <div className="words">
    {words}
   </div>

   <div className="keyboard">
    {keyboard}
    
   </div>

   <div className="new">
   <button>New Game!</button>
   </div>

   

  </main>
  )
  
}

