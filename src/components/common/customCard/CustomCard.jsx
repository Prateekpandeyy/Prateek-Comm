import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
const CustomCard = (props) =>{
    return (
      <div>
<Card sx={{ maxWidth: props.width, margin : props.margin , padding : 5, maxHeight : props.height}}>
   
<CardMedia
        component="img"
        image= {props.image}
      
        alt="Paella dish"
      /> 
   <CardContent>
        <Typography variant="h3" margin={1}>
         {props.heading}
        </Typography>
        <Typography variant="h6" margin={1}>
         {props.label}
        </Typography>
      </CardContent>
    </Card>
      </div>
    )
}
export default CustomCard;