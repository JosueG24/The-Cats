import { useState } from 'react'
import Info from './components/Info';
import Principal_Rest from './components/Principal_Rest';
import Principal_Graphql from './components/Principal_Grraphql';

function App() {
  const [modeSelect, setModeSelect] = useState("rest")
  const [infoActive, setinfoActive] = useState(false)
  const [btnComenzar, setBtnComenzar] = useState(false)

  function handleModeSelect(btnData: string){
    if(btnData == "rest")setModeSelect("rest")
    if(btnData == "graphql")setModeSelect("graphql")
  }

  if(infoActive == false && btnComenzar==false)
  return (
  <section className='myBody'>
      <header className=' w-full h-1/6 bgWhite outlineBlack'>
        <div className='w-full h-1/2 flex items-center justify-center'>
          <p className='text-white text-4xl'>The Cats</p>
        </div>
        <div  className='w-full h-1/2 flex items-center justify-around'>
          <div className='flex '>
            <button className={modeSelect=="rest"? "bgRed p-2 outline outline-1":" p-2 outline outline-1"} onClick={()=>handleModeSelect("rest")}>Rest Api</button>
            <button className={modeSelect=="graphql"? "bgRed p-2 outline outline-1":" p-2 outline outline-1"} onClick={()=>handleModeSelect("graphql")}>Graphql</button>
          </div>
          <button className='bgRed p-2' onClick={()=>setinfoActive(true)}>Informacion</button>
        </div>
      </header>
      <section className='w-full h-5/6 outlineBlack sombra flex justify-around items-center'>
        <img className='w-1/6' src='https://media.tenor.com/5Jingks2rHAAAAAC/%D1%84%D0%BB%D0%B5%D0%BA%D1%81%D0%BA%D0%BE%D1%82%D0%B0-catflex.gif' alt='Animated Gif'/>
        <button className='outlineBlack sombra p-3 text-white text-2xl' onClick={()=>setBtnComenzar(true)}>Comenzar</button>
        <img className='w-1/6' src='https://media.tenor.com/5Jingks2rHAAAAAC/%D1%84%D0%BB%D0%B5%D0%BA%D1%81%D0%BA%D0%BE%D1%82%D0%B0-catflex.gif' alt='Animated Gif'/>
      </section>
  </section>
  )

  if(infoActive == true)
  return (
    <Info funcReturn={()=>setinfoActive(false)}/>
  )


  if(btnComenzar==true && modeSelect=="rest")
  return(
    <Principal_Rest funcReturn={()=>setBtnComenzar(false)}/>
  )
  if(btnComenzar==true && modeSelect=="graphql")
  return(
    <Principal_Graphql funcReturn={()=>setBtnComenzar(false)}/>
  )
}

export default App
