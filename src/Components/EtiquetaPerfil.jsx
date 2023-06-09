import React from 'react'
import { Grid, Avatar, Typography, } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import "../App.css"
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));


const EtiquetaPerfil = ({perfil,index}) => {
  const navigate= useNavigate()

  const handleClick=() => {
    navigate(`/Mi Perfil/${index}`)
  }
  
    
  return (
    <>
    <Grid className="aparecer" container bgcolor={index % 2 === 0 ?'#ECEEF3 ':'#ffff' } sx={{minWidth:350}}>
       <Grid item xs={4} sm={2}>
        <Avatar  src={perfil.img} sx={{ width: 90, height: 90 , m:2}}/>
       </Grid>

       <Grid  container item xs={8}  sm={10} alignItems={'center'} pt={1}>

         <Grid container item xs={12} >
           <Grid item xs={12}>
           <Typography variant="h6" component="h6"> {perfil.name}</Typography> 
           <Typography variant="body2" component="p" > {perfil.cargo}</Typography> 
           </Grid>
          
         </Grid>

         <Grid item xs={12} display={'flex'} justifyContent={'end'} pr={2} alignItems={'start'}>
         <ColorButton 
                variant="contained"
                size="small"
                sx={{px:4}}
                onClick={handleClick}
                >
                
                Ver
              </ColorButton>
         </Grid>
         

        
       </Grid>

    </Grid>


    </>
  )
}

export default EtiquetaPerfil