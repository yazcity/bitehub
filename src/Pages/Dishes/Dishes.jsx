import React from 'react'
import CustomCard from '../../Components/CustomCard/CustomCard';
import { Box, Container, styled, Typography } from "@mui/material";
import { Data } from '../../StaticData/Data';


const Dishes = ()=> {

    const DishesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItem: "center",
        },
    }));

    const PropertoiesTextBox = styled(Box)(({ theme }) =>({
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    }));
  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE" , py: 10}}>
        <Container>
            <PropertoiesTextBox>
               <Typography sx ={{color: "#000339", fontSize: "35px", fontWeight: "bold", ml:"13px" }}>
                 Featured Dishes
               </Typography>
               <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1,ml:"13px" }}>
                 Expolore Variety of South Indian Dishes !!
               </Typography>
            </PropertoiesTextBox>
            <DishesBox>
                {Data.map((foodItem) => (
                    <CustomCard
                      key={foodItem.id}
                      img={foodItem.img}
                      price={foodItem.price}
                      item={foodItem.price}
                      likes={foodItem.likes}
                      heart={foodItem.heart}
                      share={foodItem.share}/>
                ))}
            </DishesBox>
        </Container>
    </Box>
  )
}

export default Dishes
