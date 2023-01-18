import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useFood } from "../../hooks";
import ButtonOrder from "../Button";
import "./index.css";

type Food = {
  setToggleModal: (boolean: boolean) => void;
  foods: {
    name: string;
    img: string;
    price: number;
    ingredients?: string;
    id: number;
  };
};

type Drink = {
  drinks: {
    name: string;
    img: string;
    price: number;
    ingredients?: string;
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
        borderBottom: "4px solid #000",
      }}
    >
      <Box
        onClick={() => {
          props.setToggleModal(true);
          setCurrentFood({ name: name, price: price, id: id });
        }}
        display="flex"
      >
        <img height={110} width={150} src={img} alt="" />
        <Box sx={{ ml: 2 }}>
          <Typography
            component="span"
            variant="h5"
            align="center"
            color="#dad6d6"
          >
            {name}
          </Typography>

          <ButtonOrder
            data={"Adicionar"}
            width={150}
            p={1}
            back={"#fa942e"}
            color={"#fff"}
          />
        </Box>
      </Box>
    </Box>
  );
};
