import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useFood } from "../../hooks";
type ButtonOrderProps = {
  data: string;
  width?: number;
  back?: string;
  color?: string;
  p?: number;
  box?: string;
  nameButton?: boolean;
};
const ButtonOrder = (props: ButtonOrderProps) => {
  const { order, currentFood } = useFood();
  const [nameButton, setNameButton] = useState(false);

  const checkName = () => {
    order.find((e) =>
      e.name == currentFood.name ? setNameButton(true) : setNameButton(false)
    );
  };

  return (
    <Button
      onClick={checkName}
      sx={{
        borderRadius: "30px",
        mt: 4,
        mr: 1,
        mb: 2,
        width: props.width,
        background: nameButton ? "blue" : props.back,
        color: props.color,
        p: props.p,
        boxShadow: props.box,
      }}
    >
      <Typography component="span" variant="subtitle2">
        {nameButton ? "Adicionado" : props.data}
      </Typography>
    </Button>
  );
};

export default ButtonOrder;
