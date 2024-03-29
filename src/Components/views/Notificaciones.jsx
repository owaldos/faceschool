import React, {useContext, useEffect} from 'react'
import {Context} from '../../store/appContext'
import Footer from '../Footer'
import ResponsiveAppBar from '../ResponsiveAppBar'
import EtiquetaNotificacionescopy from '../EtiquetaNotificacionescopy'
import SectionHeading from '../SectionHeading'
import { Box } from '@mui/material'


const Notificaciones = () => {
  
  
  const { store}= useContext( Context)

  useEffect(() => {
    window.scrollTo(0,0)
  
  
  }, [])


   
  return (
    <>
    <ResponsiveAppBar/>
    <SectionHeading name='Notificaciones' boton={true}/>
    <Box sx={{padding:1 }}>

      {store.escuela[0].notificaciones.map((notif, index)=>(
        
        <EtiquetaNotificacionescopy key={index} datos={notif} index={index} de='escuela'/>

      ))}
    </Box>
  
      
    <Footer/>
    </>
  )
}

export default Notificaciones