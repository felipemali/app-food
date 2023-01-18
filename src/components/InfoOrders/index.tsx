import { Box, Button, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ButtonOrder from "../Button";
import ShoppingCart from "../../assets/carrinho.png";
import Fast from "../../assets/fast.jpg";
import Lanche from "../../assets/lanche.png";
import { useFood } from "../../hooks";

const InfoOrder = () => {
  const style = {
    ml: 1,
  };
  const { qntToMake, totalMade } = useFood();
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        background: "#fff",
      }}
    >
      <Box sx={{ pt: 3, pl: 3, width: "100%" }} height="250px">
        <Typography variant="h6" sx={{ mb: 1 }}>
          Informações
        </Typography>
        <Typography component="span" variant="subtitle1">
          Pedidos há fazer:
          <Typography component="span" color="#fa942e" sx={{ ml: style.ml }}>
            {qntToMake}
          </Typography>
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Feitos:
          <Typography component="span" color="#fa942e" sx={{ ml: style.ml }}>
            {totalMade}
          </Typography>
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Total Feitos:
          <Typography component="span" color="#fa942e" sx={{ ml: style.ml }}>
            5
          </Typography>
        </Typography>

        <ButtonOrder data="Encerrar" back={"#fa942e"} color="#fff" width={80} />
        <ButtonOrder data={"pedido"} back={"#fa942e"} color="#fff" width={80} />
      </Box>

      <Box component="div" sx={{ mt: 2, width: "100%" }}>
        <img width={160} height={200} src={Lanche} alt="" />
      </Box>
    </Box>
  );
};
export default InfoOrder;
