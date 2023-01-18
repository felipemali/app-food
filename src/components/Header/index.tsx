import react from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import InfoOrder from "../InfoOrders";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          borderTop: "1px solid gray",
          borderRadius: "25px 25px 0 0",
        }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon color="warning" />
          </IconButton>
          <Typography
            component="span"
            variant="h6"
            color="#fff"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Lanches Sandra
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="warning"
                sx={{ mr: 3 }}
              >
                <FastfoodIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <InfoOrder />
    </Box>
  );
};
export default Header;
