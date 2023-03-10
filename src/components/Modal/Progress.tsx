import { useState, useEffect, useRef } from "react";
import { CircularProgressProps } from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFood } from "../../hooks";
type ProgressProps = {
  setToggleModal: (boolean: boolean) => void;
  setErrorOrderMessage: (error: boolean) => void;
  indexOrder: number;
  editFood: boolean;
  setEditFood: (food: boolean) => void;
};
function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <Box
        sx={{
          top: 0,
          left: 100,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

const Progress = ({
  setToggleModal,
  setErrorOrderMessage,
  indexOrder,
  editFood,
  setEditFood,
}: ProgressProps) => {
  const [progress, setProgress] = useState<number>(1);

  const { order, setOrder, currentFood, toMake } = useFood();
  const timer = useRef<number>();

  const checkFood = () => {
    const index: number = order.findIndex(({ id }) => id === currentFood.id);
    if (editFood) {
      const indexEditOrder: number = toMake[indexOrder].items.findIndex(
        ({ id }: any) => id === currentFood.id
      );

      if (indexEditOrder !== -1) {
        toMake[indexOrder].items[indexEditOrder].quantity += progress;
      } else {
        toMake[indexOrder].items.push({
          name: currentFood.name,
          price: currentFood.price,
          quantity: progress,
          id: currentFood.id,
          total_price: progress * currentFood.price,
        });
      }
    }

    if (index !== -1) {
      order[index].quantity += progress;
    } else {
      setOrder([
        ...order,
        {
          name: currentFood.name,
          price: currentFood.price,
          quantity: progress,
          id: currentFood.id,
          total_price: progress * currentFood.price,
        },
      ]);
    }

    timer.current = window.setTimeout(() => {
      if (editFood) {
        setOrder([]);
      }
      setToggleModal(false);
      setEditFood(false);
    }, 150);
  };

  return (
    <Box sx={{ ml: "auto", mr: "auto", mt: 3, width: "60%" }}>
      <Box>
        <CircularProgressWithLabel size={150} value={progress} />
      </Box>
      <Stack sx={{ mt: 5 }} spacing={4} direction="row">
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setProgress((oldNum) => oldNum + 1)}
        >
          <Typography component="span" variant="h6">
            +1
          </Typography>
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => {
            progress === 1
              ? setProgress(1)
              : setProgress((oldNum) => oldNum - 1);
          }}
        >
          <Typography component="span" variant="h6">
            -1
          </Typography>
        </Button>
      </Stack>
      <Button
        color="error"
        sx={{ mt: 6 }}
        fullWidth
        variant="outlined"
        onClick={() => {
          checkFood();
          setErrorOrderMessage(false);
        }}
      >
        Ok
      </Button>
    </Box>
  );
};
export default Progress;
