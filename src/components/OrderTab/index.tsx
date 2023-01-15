import * as React from "react";
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

const OrderTab = () => {
  const [value, setValue] = React.useState("1");
  const [toggleModal, setToggleModal] = React.useState<boolean>(false);

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
              />
            );
          })}
          <OrderModal
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
          <Drawer />
        </TabPanel>
        <TabPanel value="2">
          <input type="time" />
        </TabPanel>
        <TabPanel value="3">
          <OrdersToMake />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default OrderTab;
