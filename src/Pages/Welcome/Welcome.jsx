import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { alignItems, color, flex, flexDirection, fontSize, fontWeight, styled, textAlign } from '@mui/system';
import { Container } from "@mui/system";
import CustomButton from '../../Components/CustomButton/CustomButton';
import welcompng from '../../assets/welcome.png';


const Welcome = ()=> {

    const CustomBox = styled(Box)(({theme})=>({
      display: "flex",
      justifyContent: "center",
      gap: theme.spacing(5),
      marginTop:theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
    }));
    const Title = styled(Typography)(({theme})=>({
        fontSize: "64px",
        color: "#fff",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize:"40px",
        },
    }));
  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh"}}>
      <Container>
        <CustomBox>
          <Box sx={{flex: "1"}}>
            <Typography variant= "body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt:10,
                mb: 4,
              }}
            >
                Welcome to BiteHub Restaurant
            </Typography>
            <Title variant="h1">
                Discover a place where you'll love to Eat,
            </Title>
            <Typography variant="body2"
              sx={{fontSize: "18px", color: "#5A6473", my:4}}>
                Immerse yourself in the elegant ambiance as you savor each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails.
              </Typography>
              <CustomButton 
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                welcomeBtn={true}/>
          </Box>

          <Box sx={{flex: "1.25"}}>
            <img src={welcompng} alt="welcome" 
                  style={{maxWidth: "100%", marginBottom: "2rem"}}/>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default Welcome
