import Box from "@mui/material/Box";
import Table from "./Table";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { style } from "../../../style";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import Drawer from "../../Orders/OrderDrawer";
import DrawerProfit from "./DrawerProfit";

// type TotalOrdersProps = {
//   total: number;
//   setTotal: (placed: (placed: number) => number) => void;
// };
const DataOrders = () => {
  const { primary, secondary } = style.pallete;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: primary }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: style.spaccing.m_sx }}
            >
              <Link to={routes.home.path}>
                <ArrowBackIcon
                  sx={{
                    border: `1px solid ${secondary}`,
                    borderRadius: style.dimensions.borderRadius,
                    bgcolor: secondary,
                    color: primary,
                  }}
                />
              </Link>
            </IconButton>
            <Typography
              sx={{ m: "auto", fontWeight: style.fonts.fontweight }}
              align="center"
              variant="h6"
              color="inherit"
              component="div"
            >
              Informações
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* / */}
      <Table />
      <DrawerProfit />
    </>
  );
};

export default DataOrders;
