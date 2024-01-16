import React, {useContext,useEffect} from 'react';
import {Context} from '../../store/appContext'
import '../../App.css';
import { Box} from '@mui/material';
import MiCard from '../MiCard';

import ResponsiveAppBar from '../ResponsiveAppBar';

import Slider from '../Slider';
import segundafotoslider from '../../images/11.png'



function Home() {

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  const {store}= useContext(Context)
  
  return (
    <>
    <Box   sx={{ justifyContent:'center'}}  >
      
      <header className="App-header">
        <ResponsiveAppBar /> 
      </header>
   
    </Box>


    <Box sx={{ justifyContent:'center'}}>

      <Slider  images={['inicial.png','publicidad.png']} buttons={false} intervalImg={5000} autoPlay={true}/>
      <img src={segundafotoslider } style={{maxWidth:'720px',width:'100%',maxHeight:'400px',objectFit:'fill',height:"180px", padding:'10px'}}/>

      {store.escuela[0].publicaciones.map((publicacion, index)=>(
        
        <MiCard key={index} datos={publicacion} index={index}/> 

      ))}
      
        
         
         
    </Box>
    </>
  );
}

export default Home;
