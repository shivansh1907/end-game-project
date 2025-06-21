 
import { languages } from "./languages"
import React from "react"
import clsx from "clsx"
import genRandomWord from "../utils"
import { words } from "../words"


export default function App() {
  const alphabets="abcdefghijklmnopqrstuvwxyz"
  const randomWord=genRandomWord();

  const [currword,setcurrword]=React.useState(randomWord)
  const [guessedletters,setguessedletters]=React.useState([])

  // derived values
   
  const wrongguesscount=
                guessedletters.filter(letter=>!currword.includes(letter)).length
  
  console.log(guessedletters)
  //function to handle click
  const handleclick=(e)=>{
    const newitem=e.currentTarget.innerText.toLowerCase()
    setguessedletters(prevletters=>prevletters.includes(newitem)?prevletters:[...prevletters,newitem])
    

  }
 


  const isgamewin=()=>{
    for(let letter of currword){
    if(!guessedletters.includes(letter)){
      return false
    }
  }
return true}
const isgamewon=isgamewin();
const isgamelost=wrongguesscount>=languages.length-2?true:false


const isgameover=isgamewon || isgamelost





 


  const langs=languages.map((lang,index)=>{
    const islanguagelost=index<wrongguesscount
    const languageexist=index>=wrongguesscount
    const classNames=clsx({
      chiplost:islanguagelost,
      chipexist:languageexist
    })

    const styles={
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return(
      <span key={index}
      className={classNames}
      style={styles}>
        {
          lang.name
        }
        

      </span>
    )

  })

  //functionn to handle click
  
  const words=currword.split("").map((letter,index)=>{
    const shouldReveal=isgamelost || guessedletters.includes(letter)
    return (
      <span key ={index} className="letter">{shouldReveal?letter.toUpperCase():""}</span>
    )
  })

  const keyboard=alphabets.split("").map((key)=>{
    const isguessed=guessedletters.includes(key)
    const iscorrect=isguessed&& currword.includes(key)
    const iswrong=isguessed&&!currword.includes(key)
    const classNames=clsx({
      correct:iscorrect,
      wrong:iswrong
    })
    return(
      <button 
      key={key}
      className={classNames} 
      onClick={handleclick} >{key.toUpperCase()}</button>
    )
  })
  const gamestatusclass=clsx("status",{
    won:isgamewon,
    lost:isgamelost,
  })

  const keyboardClass=clsx("keyboard",{
    disable:isgameover

  })
  return (
    
  <main>
   <header>
    <h1>Assembly:Endgame</h1>
    <p>Guess the word within 8 attempts to keep the programming world safe from assembly!</p>
   </header>

   
    <section className={gamestatusclass}>
  {isgameover?(
    isgamewon?<>
     <h3>You Win!</h3>
     <p>Well Done!</p>
    </>:
    
    <>
    <h3>OOPS!</h3>
    <p>Better luck next time</p>
    </>
  ):null}

   
   
  
   </section>


   <section className="languages">
    {langs}

   </section>

   <div className="words">
    {words}
   </div>

   <section className={keyboardClass}>
    {keyboard}
    
   </section>
   
   <section className="new">
    {isgameover &&
   <button onClick={()=>{
    setcurrword(genRandomWord())
    setguessedletters([])
  }}> New Game!</button>
   }
   </section>



   

  </main>
  )
  
}

