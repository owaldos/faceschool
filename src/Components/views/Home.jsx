import React, {useContext,useEffect, useState} from 'react';
import {Context} from '../../store/appContext'
import '../../App.css';
import { Box} from '@mui/material';
import MiCard from '../MiCard';
import Card2 from '../Card2';
import ResponsiveAppBar from '../ResponsiveAppBar';

import Slider from '../Slider';
import segundafotoslider from '../../images/11.png'
import campusvirtual from '../../images/campusvirtual.png'
import imgfooter from '../../images/imgfooter.png'
import ListaMenu from '../ListaMenu';

import { ReportGmailerrorred } from '@mui/icons-material';


function Home() {

   const [data, setdata]= useState('')
  useEffect(() => {
    window.scrollTo(0,0)

  
  
  }, [])
  
  const {store}= useContext(Context)

  let t1 = 'Una institución proyectada al uso de las TICs en el proceso educativo con recursos actualizados y personal preparado que forme profesionales capaces de enfrentarse al mundo en esta era digital.'
  let t2 = 'Un profesor capacitado y actualizado, que maneje las tecnologías de vanguardia y aplica las TICs en las estrategias de enseñanza, aprendizaje y evaluación de los estudiantes.'
  let t3 = 'Un estudiante que maneja las TICs en su proceso de aprendizaje y preparado con competencias firmes para enfrentar las diferentes situaciones en el mundo digital que afrontará a futuro.'
  let t4 = 'Una plataforma educativa adecuada a las necesidades de la institución y participantes, que cuenta con los espacios virtuales para el desarrollo de un aprendizaje significativo.'

  
   
  
  return (
    <>
    <Box   sx={{ justifyContent:'center'}}  >
      
      <header className="App-header">
        <ResponsiveAppBar /> 
      </header>
   
    </Box>


    <Box sx={{ justifyContent:'center'}}>

      <Slider  images={['inicial.png','publicidad.png']} buttons={false} intervalImg={5000} autoPlay={true}/>
      <Box  sx={{ display:'flex', justifyContent:'center', }}>

      <img src={campusvirtual } style={{maxWidth:'720px',width:'100%',maxHeight:'400px',objectFit:'fill',}}/>
      </Box >
      {/* <Box  sx={{ display:'flex', justifyContent:'center',maxWidth:'720px', margin:'auto' }}>
      < ListaMenu array ={['INGENIERÍA' , 'LICENCIATURA', 'TSU', 'TEOLOGÍA', 'DIPLOMADOS' , 'ACADEMIA DE MÚSICA' , 'DEPARTAMENTO DE IDIOMAS' , 'SERVICIOS COMUNITARIOS' , 'PRACTICA MINISTERIAL' , 'INDUCTIVOS', 'CAPELLANÍA VIRTUAL' , 'IUNAV INFORMA' , 'CONTACTO' , 'IUNAV DIGITAL' , 'OFICINA DE GRADOS' , 'TRAYECTO INICIAL']}/>
      </Box > */}

      {/* <Box  sx={{ display:'flex', justifyContent:'center', flexWrap:'wrap', marginTop:'20px'}}>
       
      <Card2 titulo='IUNAV DIGITAL' foto={imgfooter} texto={t1}/>
      <Card2 titulo='DOCENTE DIGITAL' foto={imgfooter} texto={t2}/>
      <Card2 titulo='ESTUDIANTE DIGITAL' foto={imgfooter} texto={t3}/>
      <Card2 titulo='CAMPUS VIRTUAL' foto={imgfooter} texto={t4}/>
      

      </Box > */}

      <Box  sx={{ display:'flex', justifyContent:'center', }}>

      <img src={segundafotoslider } style={{maxWidth:'720px',width:'100%',maxHeight:'400px',objectFit:'fill'}}/>
      </Box >

      <Box  sx={{  justifyContent:'center',}} >

       <img src={imgfooter } style={{maxWidth:'720px',width:'100%',maxHeight:'400px',objectFit:'fill', margin:'0px' }}/>

      </Box >
     

      
{/* 
      {store.escuela[0].publicaciones.map((publicacion, index)=>(
        
        <MiCard key={index} datos={publicacion} index={index}/> 

      ))}
       */}
        
         
         
    </Box>
    </>
  );
}

export default Home;
