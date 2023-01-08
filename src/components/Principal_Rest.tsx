import React, {useEffect, useState} from 'react'

import Modal from './MyModal';
import findOrphanCats, {orphanCatsQuery} from '../services/findOrphanCats';
import findAdoptedCats, {adoptedCatsQuery} from '../services/findAdoptedCats';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { EffectCoverflow } from 'swiper';
import 'swiper/css/bundle';

type myPropses={
    funcReturn:()=>void
  }

 const Principal_Rest:React.FC<myPropses> =(propses:{funcReturn:()=>void})=>{ 
  const [theModal, setTheModal] = useState(false)
  const [catSelected, setCatSelected] = useState("")

  // gatos adoptados
  const [orphanCats, setOrphanCats] = useState<Array<orphanCatsQuery>>([{
      name: "Cargando",
      source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  },
  {
    name: "Cargando",
    source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  },{
    name: "Cargando",
    source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  },{
    name: "Cargando",
    source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  }])
  useEffect(() => {
    const query = async ()=>{
      const response = await findOrphanCats()
        setOrphanCats(response)
    }
    query();
  }, [])

  //gatos huerfanos
  const [adoptedCats, setAdoptedCats] = useState<Array<adoptedCatsQuery>>([{
      name: "Cargando",
      source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  },
  {
    name: "Cargando",
    source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  },{
    name: "Cargando",
    source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  },{
    name: "Cargando",
    source:"https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
  }])
  useEffect(() => {
    const query = async ()=>{
      const response = await findAdoptedCats()
        setAdoptedCats(response)
    }
    query();
  }, [])

  // funcion del boton del gato
  function chooseHandler(name:string){
    setTheModal(true)
    setCatSelected(name)
  }

  return (
    <section className='myBody'>
        <header className=' w-full h-1/6 bgWhite outlineBlack'>
        <div className='w-full h-1/2 flex items-center justify-center'>
            <p className='text-white text-4xl'>Comenzamos rest</p>
        </div>
        <div  className='w-full h-1/2 flex items-center justify-end'>
            <button className='bgPurple p-2' onClick={propses.funcReturn}>regresar</button>
        </div>
        </header>
        <section className='w-full h-5/6 outlineBlack sombra'>
          <p className='text-center text-xl colorWhite'>Gatos Adoptados</p>
          <Swiper
                className='swiperAdoptados'
                modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
                effect="coverflow"
                navigation
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={3}
          >
            <SwiperSlide className='carruselContainerOff'></SwiperSlide>

            {adoptedCats.map((item,index)=>{
                return(
                  <SwiperSlide className='carruselContainer' key={index}>
                      <div className='carruselContent flex flex-row justify-around items-center'>
                      <p className='h-full w-4/6 text-center'>{item.name}</p>
                      <button className='h-full w-2/6 bgLight ' onClick={()=>chooseHandler(item.name)}>Detalles</button>
                    </div>
                    <img className='carruselImage' src={item.source}/>
                  </SwiperSlide>
                )
              })}

            <SwiperSlide className='carruselContainerOff'></SwiperSlide>
          </Swiper>

          <p className='text-center text-xl colorWhite'>Gatos huerfanos</p>
          <Swiper
            className='swiperHuerfanos'
            modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
            effect="coverflow"
            navigation
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={3}>
            <SwiperSlide className='carruselContainerOff'></SwiperSlide>
            
              {orphanCats.map((item,index)=>{
                return(
                  <SwiperSlide className='carruselContainer' key={index}>
                    <div className='carruselContent flex flex-row justify-around items-center'>
                      <p className='h-full w-4/6 text-center'>{item.name}</p>
                      <button className='h-full w-2/6 bgLight ' onClick={()=>chooseHandler(item.name)}>Detalles</button>
                    </div>
                    <img className='carruselImage' src={item.source}/>
                  </SwiperSlide>
                )
              })}
            <SwiperSlide className='carruselContainerOff'></SwiperSlide>
          </Swiper>
        </section>

        {theModal == true &&
          <Modal cat={catSelected} closeModal={()=>setTheModal(false)}/>
        }
      </section>

  )
  }

    export default Principal_Rest;  