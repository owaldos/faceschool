import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "../App.css"
import { useNavigate } from 'react-router-dom';

export default function EtiquetaNotificacionescopy({datos,index,de}) {

  const {store, actions}= useContext(Context)
  const navigate=useNavigate()

  const handleClick= ()=>{
    if(de==='escuela'){

      actions.setvistosNotificacionesEscuela(index)
    } else actions.setvistosNotificacionesGrado(de,index)

    navigate(`/responderNotificaciones/${de}/${index}`)
    
  }
  
  return (
    <List 
    className='aparecer'
    sx={{ 
      width: '100%', 
      maxWidth: 900, 
      mx:'auto', 
      paddingY:0, 
      opacity:de==='escuela'
        ?
         store.escuela[0].notificaciones[index].visto===true
          ?
             '0.5'
          :
            '1'
        :store.grados[de].notificaciones[index].visto===true
          ?
          '0.5'
          :
           '1',
      backgroundColor:'#fff'
    }}
    onClick={handleClick}

    >
      <ListItemButton alignItems="flex-start" sx={{paddingY:0, }} >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={datos.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={datos.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {datos.fecha }
              </Typography>
              {" El dia de mañana no tendremos clases ..."}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
     
    </List>
  );
}