import { useFood } from "../../../hooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Paper, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Food } from "../../../provider/wishList";
import { addDoc } from "firebase/firestore";
import { Order } from "../OrderDrawer/SaveButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { db } from "../../../firebase";

type Teste = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total_price: number;
};
const OrdersToMake = (props: any) => {
  const { toMake, setToMake, setQntToMake, setTotalMade, qntToMake } =
    useFood();
  // const [or, setOr] = useState<Teste | {}>({});

  const deleteToMake = (index: number) => {
    setQntToMake((oldNum) => oldNum - 1);
    setTotalMade((oldNum) => oldNum + 1);
    setToMake((old: Order[]) =>
      old.filter((_: any, currentIndex: number) => index !== currentIndex)
    );
  };

  const addOrderDataBase = (order: Order) => {
    db.collection("orders").add({
      items: order.items,
      createdAt: new Date(),
    });
  };

  props.setIndexOrder(-1);

  return (
    <>
      {toMake?.map((order, index: number) => (
        // <Paper sx={{ mt: 3 }} key={key_paper + 1}>
        <Accordion sx={{ mt: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pedido {index + 1}</Typography>
          </AccordionSummary>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{ display: "block" }}
              key={"item-" + index}
              secondaryAction={
                <ListItemIcon>
                  <Checkbox
                    checked={false}
                    onClick={() => {
                      deleteToMake(index);
                      addOrderDataBase(order);
                    }}
                  />
                </ListItemIcon>
              }
              disablePadding
            >
              <Button
                onClick={() => {
                  props.setEditFood(true);
                  props.setIndexOrder(index);
                  props.value("1");
                }}
                sx={{ color: "#c9bd14" }}
              >
                Editar
              </Button>
              {order?.items.map((item: Food) => {
                // console.log(item);

                const labelId = `checkbox-list-label-${item.id}`;
                return (
                  <AccordionDetails sx={{ p: 0, m: 0 }}>
                    <ListItemButton role={undefined} dense key={item.id}>
                      <ListItemText
                        sx={{ size: "2rem" }}
                        id={labelId}
                        primary={
                          <Typography
                            component="span"
                            variant="inherit"
                            sx={{ fontSize: 17 }}
                          >
                            {item?.quantity} - {item?.name} {item?.price}R$
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </AccordionDetails>
                );
              })}
              {/* <Typography component="span" variant="h6" sx={{ ml: 2, mt: 0.7 }}>
                Anotação:
              </Typography>
              <Typography
                color="#ac6a28"
                component="span"
                sx={{ ml: 1 }}
                variant="h6"
              >
                {toMake[index].anotation}
              </Typography> */}

              <Typography
                display="flex"
                component="span"
                variant="h6"
                sx={{ ml: 2, mt: 0.7 }}
              >
                Total:
                <Typography
                  color="red"
                  component="span"
                  sx={{ ml: 1 }}
                  variant="h6"
                >
                  {toMake[index].items.reduce(
                    (acc: number, curr: Food) =>
                      acc + curr.quantity * curr.price,
                    0
                  )}
                  R$
                </Typography>
              </Typography>
            </ListItem>
          </List>
        </Accordion>
        // </Paper>
      ))}
    </>
  );
};

export default OrdersToMake;
