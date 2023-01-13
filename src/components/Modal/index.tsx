import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Progress from "./Progress";
import { useFood } from "../../hooks";

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
};

const OrderModal = ({ setToggleModal, toggleModal }: OrderModalProps) => {
  const { currentFood } = useFood();
  const [b, setB] = useState<number>(0);
  // console.log(b);

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
              onClick={() => setB((old) => old + 1)}
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

          <Progress setToggleModal={setToggleModal} />
        </Box>
      </Modal>
    </div>
  );
};
export default OrderModal;
