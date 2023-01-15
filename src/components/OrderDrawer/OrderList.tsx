import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useFood } from "../../hooks";
import { Alert, Paper, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveButton from "./SaveButton";

type OrderListProps = {
  setOpen: (open: boolean) => void;
};

const OrderList = ({ setOpen }: OrderListProps) => {
  const { order, setOrder } = useFood();

  const [errorOrderMessage, setErrorOrderMessage] = useState(false);

  const handleToggle = (value: number) => () => {
    const exclued = order.filter((id) => id.id !== value);
    return setOrder(exclued);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          m: "auto",
        }}
      >
        {errorOrderMessage && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="outlined" severity="error">
              This is an error alert — check it out!
            </Alert>
          </Stack>
        )}
        {order.map((food) => {
          const labelId = `checkbox-list-label-${food.id}`;
          return (
            <ListItem
              sx={{  mt: 1.5 }}
              key={food.id}
              secondaryAction={
                <ListItemIcon>
                  <DeleteIcon onClick={handleToggle(food.id)} />
                </ListItemIcon>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemText
                  sx={{ size: "2rem" }}
                  id={labelId}
                  primary={
                    <Typography
                      component="span"
                      variant="inherit"
                      sx={{ fontSize: 17 }}
                    >
                      {food?.quantity} - {food?.name} {food.price}R$
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <SaveButton
        setErrorOrderMessage={setErrorOrderMessage}
        setOpen={setOpen}
      />
    </>
  );
};
export default OrderList;
