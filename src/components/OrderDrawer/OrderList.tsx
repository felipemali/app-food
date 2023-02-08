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
import { spawn } from "child_process";
import TextField from "@mui/material/TextField";

type OrderListProps = {
  setOpen: (open: boolean) => void;
  errorOrderMessage: boolean;
  setErrorOrderMessage: (error: boolean) => void;
  valueTab: (value: string) => void;
  editFood: boolean;
};

const OrderList = ({
  setOpen,
  errorOrderMessage,
  setErrorOrderMessage,
  valueTab,
  editFood,
}: OrderListProps) => {
  const { order, setOrder, currentFood } = useFood();
  const [inputAnotation, setInputAnotation] = useState<string>("");

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
          <Stack sx={{ width: "100%", mb: 2 }} spacing={2}>
            <Alert variant="outlined" severity="error">
              Lista de pedidos vazia!!!
            </Alert>
          </Stack>
        )}
        <TextField
          id="outlined-basic"
          label="Anotação..."
          variant="outlined"
          size="small"
          autoComplete="off"
          onChange={(e) => setInputAnotation(e.target.value)}
        />

        {editFood === false &&
          order.map((food) => {
            const labelId = `checkbox-list-label-${food.id}`;
            return (
              <ListItem
                sx={{ mt: 1.5 }}
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
        inputAnotation={inputAnotation}
        setErrorOrderMessage={setErrorOrderMessage}
        setOpen={setOpen}
        valueTab={valueTab}
        setInputAnotation={setInputAnotation}
        editFood={editFood}
      />
    </>
  );
};
export default OrderList;
