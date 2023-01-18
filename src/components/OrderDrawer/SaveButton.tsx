import { useState, useRef, useEffect } from "react";
import { green } from "@mui/material/colors";
import { useFood } from "../../hooks";
import { CircularProgress, Button, Box, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

type SaveButtonProps = {
  setErrorOrderMessage: (error: boolean) => void;
  setOpen: (open: boolean) => void;
  inputAnotation?: string;
};

export type Item = {
  name: string;
  price: number;
  quantity: number;
  id: number;
  anotation?: string;
  total_price: number;
};

export type Order = {
  id: string;
  total: number;
  anotation?: string;
  date?: string;
  items: Item[];
};

const SaveButton = ({
  setErrorOrderMessage,
  setOpen,
  inputAnotation,
}: SaveButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { order, setToMake, toMake, setOrder, setQntToMake } = useFood();
  const timer = useRef<number>();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const a: Order[] = [{ id: "a", total: 5, anotation: "eeee", items: order }];

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
        setOrder([]);
        if (order.length > 0) {
          setSuccess(true);
          setOpen(false);
          setQntToMake((oldNum) => oldNum + 1);
        } else {
          setErrorOrderMessage(true);
        }
      }, 2000);
      setSuccess(false);
    }
    if (order.length > 0) {
      setToMake([
        ...toMake,
        [{ id: "a", total: 5, anotation: "eeee", items: order }],
      ]);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          m: 1,
          position: "absolute",
          bottom: 0,
          right: 120,
        }}
      >
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Finalizar Pedido
        </Button>

        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
};
export default SaveButton;
