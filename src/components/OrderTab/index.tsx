import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CardFood } from "../CardFood";
import { FoodProps, data } from "../../helpers/foods";
import OrderModal from "../Modal";
import Drawer from "../OrderDrawer";
import OrdersToMake from "../OrdersToMake";
import { Typography } from "@mui/material";
import { drinksData } from "../../helpers/drinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

const OrderTab = () => {
  const [value, setValue] = useState("1");
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [errorOrderMessage, setErrorOrderMessage] = useState(false);
  const [nameButton, setNameButton] = useState(false);
  const [indexOrder, setIndexOrder] = useState<number>(-1);
  const [editFood, setEditFood] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",

        borderRadius: "25px 25px 0 0",
        background: " linear-gradient(90deg, #220e03f8 8%, #4d1f04f8 95%)",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            sx={{ ml: 5 }}
            textColor="primary"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              label={
                <Typography component="span" variant="inherit" color="#fff">
                  Cardápio
                </Typography>
              }
              value="1"
            />
            <Tab
              label={
                <Typography component="span" variant="inherit" color="#fff">
                  Bebidas
                </Typography>
              }
              value="2"
            />
            <Tab
              label={
                <Typography component="span" variant="inherit" color="#fff">
                  Há Fazer
                </Typography>
              }
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          {data.map((food) => {
            return (
              <CardFood
                key={food.id}
                setToggleModal={setToggleModal}
                foods={food}
                nameButton={nameButton}
              />
            );
          })}
          <OrderModal
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            setErrorOrderMessage={setErrorOrderMessage}
            indexOrder={indexOrder}
            editFood={editFood}
            setEditFood={setEditFood}
          />
          <Drawer
            errorOrderMessage={errorOrderMessage}
            setErrorOrderMessage={setErrorOrderMessage}
            value={setValue}
            editFood={editFood}
          />
        </TabPanel>
        <TabPanel value="2">
          {drinksData.map((drink) => {
            return (
              <CardFood
                key={drink.id}
                setToggleModal={setToggleModal}
                foods={drink}
                nameButton={nameButton}
              />
            );
          })}
          <OrderModal
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            setErrorOrderMessage={setErrorOrderMessage}
            indexOrder={indexOrder}
            editFood={editFood}
            setEditFood={setEditFood}
          />
          <Drawer
            errorOrderMessage={errorOrderMessage}
            setErrorOrderMessage={setErrorOrderMessage}
            value={setValue}
            editFood={editFood}
          />
        </TabPanel>
        <TabPanel value="3">
          <OrdersToMake
            value={setValue}
            setIndexOrder={setIndexOrder}
            setEditFood={setEditFood}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default OrderTab;
