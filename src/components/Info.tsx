import React, { FormEventHandler } from 'react'
import { useState } from 'react'
import saveData from '../services/saveData'

type myPropses={
  funcReturn:()=>void
}

const Info:React.FC<myPropses> = (propses:{funcReturn:()=>void})=>{
  const [showAdd, setShowAdd] = useState(false)
  const [response, setResponse] = useState<null | boolean>(null)

  async function handleSubmit(event:React.SyntheticEvent<HTMLFormElement>){
    event.preventDefault()
    const inputName = (document.querySelector("[name='name']")as HTMLInputElement)?.value;
    const inputSource = (document.querySelector("[name='source']")as HTMLInputElement)?.value;
    const inputDueño = (document.querySelector("[name='dueño']")as HTMLInputElement)?.value;

    const saved:boolean = await saveData({name:inputName, source:inputSource, owner:inputDueño});
    // response true o false
    setResponse(saved)
  }
  return (
    <section className='myBody'>
        <header className=' w-full h-24 bgDPurple'>
        <div className='w-full h-1/2 flex items-center justify-center'>
            <p className='text-white text-4xl'>Info</p>
        </div>
        <div  className='w-full h-1/2 flex items-center justify-end'>
            <button className='bgPurple p-2' onClick={propses.funcReturn}>regresar</button>
            <button onClick={()=>setShowAdd(!showAdd)}>Show add</button>
        </div>
        </header>
        <section className='w-full bgPink'>
          {showAdd==true &&
            <form className='bg-slate-400' onSubmit={handleSubmit}>
              <p>Nombre</p>
              <input type="text" name='name'/>
              <p>Source</p>
              <input type="text" name='source'/>
              <p>Dueño</p>
              <input type="text" name='dueño'/>
              <button type='submit'>Send</button>
            </form>}
            {response !== null && <div className='bg-blue-400'>
              <p>{response==true? "guardado":"no se guardo"}</p>
              <button onClick={()=>setResponse(null)}>OK</button>
            </div>}
        </section>
    </section>
  )
}

export default Info
