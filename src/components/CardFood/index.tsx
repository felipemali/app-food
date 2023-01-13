import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useFood } from "../../hooks";

type Food = {
  setToggleModal: (boolean: boolean) => void;
  foods: {
    name: string;
    img: string;
    price: number;
    ingredients: string;
    id: number;
  };
};

export const CardFood = (props: Food) => {
  const { name, img, price, ingredients, id } = props.foods;
  const { setCurrentFood, order } = useFood();

  return (
    <Box
      sx={{
        width: "100%",
        mt: 3,
        flexGrow: 1,
        typography: "body1",
      }}
    >
      <Paper
        onClick={() => {
          props.setToggleModal(true);
          setCurrentFood({ name: name, price: price, id: id });
        }}
        sx={{ background: "#000", color: "#fff", minHeight: "100px", p: 1 }}
      >
        <Box display="flex">
          <img height={110} width={150} src={img} alt="" />
          <Box sx={{ ml: 2 }}>
            <Typography component="span" variant="h5" align="center">
              {name}
            </Typography>
            <Typography component="span" variant="h6" sx={{ mt: 2, ml: 2 }}>
              {price}R$
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
