import { useFindOrders } from "../../../hooks";
import { Food } from "../../../provider/wishList";
import Box from "@mui/material/Box";
import hb from "../../../assets/hb.png";
import {
  Accordion,
  AccordionSummary,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import BasicCard from "../card";

type TotalOrdersProps = {
  total: number;
  setTotal: (placed: (placed: number) => number) => void;
};
// type Teste = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   total_price: number;
// };
const DataOrders = () => {
  const orders = useFindOrders();
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  console.log(orders);
  console.log(quantity);

  useEffect(() => {
    const sumTotal = orders.map((e) =>
      e.data.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    );
    sumTotal.map((e) => setTotal((oldVlue) => oldVlue + e));
    const quantity = orders.map((e) =>
      e.data.reduce((acc, curr) => acc + curr.quantity, 0)
    );
    setQuantity(quantity.reduce((soma, i) => soma + i, 0));

    const qntItems = orders.map((e) => e.data.map((r) => console.log(r.id)));
  }, [orders]);

  return (
    <Box
      display="flex"

      // sx={{
      //   background: " linear-gradient(to left top, #312219 8%, #312219 95%)",
      //   height: "100vh",
      // }}
    >
      <BasicCard spacinngMl={1} total={total} description="Faturamento" />
      <BasicCard spacinngMl={2} description="Qtd Vendidos" total={quantity} />
      <BasicCard spacinngMr={1} spacinngMl={2} description="Qtd de pedidos" />

      {/* <img src={hb} alt="" /> */}
      {/* <Typography color=" #e2d0aa">Total vendidos</Typography> */}
      {/* <img src={hb} alt="" /> */}

      {/* {orders.map((data) => {
        const sum = data.data?.reduce(
          (acc, curr) => acc + curr.quantity * curr.price,
          0
        );

        return (
          <div style={{ marginTop: 2 }}>
            { {data.data?.map((e) => (
              <>
                <p>{e.name}</p>
                <p>{e.total}</p>
              </>
            ))} }

            <div>
              Total:
              {total}
            </div>
          </div>
        );
      })} */}
    </Box>
  );
};

export default DataOrders;
