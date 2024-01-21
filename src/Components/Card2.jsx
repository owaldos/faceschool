import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import foto from '../images/11.png'



export default function MediaCard({titulo, texto, foto}) {
    
  return (
    <Card sx={{ maxWidth: 350, margin:'2px'}}>
      <CardMedia
        sx={{ height: 100, borderRadius:50 ,width:100, margin:'auto', marginTop:'20px' }}
        image= {foto}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="subtitle1" component="div" align='center' sx={{fontSize:'15px', padding:'0px'}}>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='center' sx={{fontSize:'12px'}}> 
          {texto}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
