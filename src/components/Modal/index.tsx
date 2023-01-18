import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Progress from "./Progress";
import { useFood } from "../../hooks";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
type OrderModalProps = {
  setToggleModal: (boolean: boolean) => void;
  toggleModal: boolean;
  setErrorOrderMessage: (error: boolean) => void;
};

const OrderModal = ({
  setToggleModal,
  toggleModal,
  setErrorOrderMessage,
}: OrderModalProps) => {
  const { currentFood } = useFood();

  return (
    <div>
      <Modal
        open={toggleModal}
        onClose={() => setToggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex">
            <Typography
              sx={{ mr: 3 }}
              letterSpacing={1}
              id="modal-modal-title"
              variant="h6"
              component="span"
            >
              {currentFood?.name}
            </Typography>
            <Typography
              component="span"
              color="#EEAD2D"
              letterSpacing={1}
              id="modal-modal-price"
              variant="h6"
            >
              {currentFood?.price}R$
            </Typography>
          </Box>
          <TextField
            id="outlined-basic"
            label="Anotação..."
            variant="outlined"
            size="small"
            autoComplete="off"
          />

          <Progress
            setToggleModal={setToggleModal}
            setErrorOrderMessage={setErrorOrderMessage}
          />
        </Box>
      </Modal>
    </div>
  );
};
export default OrderModal;
