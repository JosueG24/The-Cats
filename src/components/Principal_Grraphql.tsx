import React from 'react'

type myPropses={
    funcReturn:()=>void
  }

 const Principal_Graphql:React.FC<myPropses> =(propses:{funcReturn:()=>void})=>{
  return (
    <section className='myBody'>
        <header className=' w-full h-24 bgDPurple'>
        <div className='w-full h-1/2 flex items-center justify-center'>
            <p className='text-white text-4xl'>Comenzamos graphql</p>
        </div>
        <div  className='w-full h-1/2 flex items-center justify-end'>
            <button className='bgPurple p-2' onClick={propses.funcReturn}>regresar</button>
        </div>
        </header>
        <section className='w-full pt-32 bgPink'>
        {/* <Holas/> */}
        </section>
    </section>
  )
}

export default Principal_Graphql;