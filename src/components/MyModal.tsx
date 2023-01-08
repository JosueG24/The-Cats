import React from 'react'

interface myPropses{
    cat: string
    closeModal: ()=>void
}

const Modal:React.FC<myPropses> = (props:{cat:string, closeModal:()=>void})=>{
  return (
    <div className='modal'>
    <button className='bg-white' onClick={props.closeModal}>Cerrar</button>
    <p className='text-8xl text-white'>{props.cat}</p>
  </div>
  )
}

export default Modal;