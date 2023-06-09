import React,{useContext,useEffect } from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import EtiquetaNotificacionescopy from '../EtiquetaNotificacionescopy'
import SectionHeading from '../SectionHeading'


const NotificacionesGrado = () => {
  
  const {store }= useContext(Context)
 

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
 

  return (
    <>
     <ResponsiveAppBarGrado  gradoIndex={store.usuario[0].seleccionDelUsuario.grado}/> 

     < SectionHeading name='Notificaciones' boton={true}/>

     {store.escuela[0].notificaciones.map((notif, index)=>(
      
      <EtiquetaNotificacionescopy key={index} datos={notif} index={index}/>

    ))}
  
    <Footer/>
    </>
  )
}

export default NotificacionesGrado