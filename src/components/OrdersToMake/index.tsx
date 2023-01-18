import { useState, useEffect, useRef } from "react";
import { useFood } from "../../hooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { Food } from "../../provider/wishList";

const OrdersToMake = () => {
  const { order, toMake, setOrder, setToMake, setQntToMake, setTotalMade } =
    useFood();

  let key_paper = 1;

  const deleteToMake = (index: number) => {
    setQntToMake((oldNum) => oldNum - 1);
    setTotalMade((oldNum) => oldNum + 1);
    setToMake((old: any) =>
      old.filter((_: any, currentIndex: number) => index !== currentIndex)
    );
  };
  // console.log(toMake[0][0].items);
  console.log(toMake);

  return (
    <>
      {toMake?.map((orders: any, index: number) => (
        <Paper sx={{ mt: 3 }} key={key_paper + 1}>
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
                    onClick={() => deleteToMake(index)}
                  />
                </ListItemIcon>
              }
              disablePadding
            >
              <Button sx={{ color: "#c9bd14" }}>Editar</Button>
              {orders?.items.map((item: any) => {
                key_paper += 1;
                const labelId = `checkbox-list-label-${item.id}`;
                return (
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
                );
              })}
              <Typography
                display="flex"
                component="span"
                variant="h5"
                sx={{ ml: 2, mt: 0.7 }}
              >
                Total:
                <Typography
                  color="red"
                  component="span"
                  sx={{ ml: 1 }}
                  variant="h5"
                >
                  {toMake[index].reduce(
                    (acc: number, curr: any) => acc + curr.total_price,
                    0
                  )}
                  R$
                </Typography>
              </Typography>

              <Typography
                display="flex"
                component="span"
                variant="h5"
                sx={{ ml: 2, mt: 0.7 }}
              >
                Anotação:
                <Typography
                  color="red"
                  component="span"
                  sx={{ ml: 1 }}
                  variant="h5"
                >
                  {toMake[index].map((anotation: any) => anotation.anotation)}
                </Typography>
              </Typography>
            </ListItem>
          </List>
        </Paper>
      ))}
    </>
  );
};

export default OrdersToMake;
