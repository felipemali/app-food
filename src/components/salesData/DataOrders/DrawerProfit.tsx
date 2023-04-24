import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Progress from "../../Modal/Progress";
import { useFood, useTotalSales } from "../../../hooks";
import { style } from "../../../style";

const drawerBleeding = 110;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function DrawerProfit(props: any) {
  const [open, setOpen] = React.useState(false);
  const totalSales = useTotalSales();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const styleTypography = style.spaccing;
  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            bottom: 0,
            border: `1px solid gray`,
            bgcolor: style.pallete.secondary,
          }}
        >
          <Puller sx={{ p: styleTypography.padding_sx }} />
          <Typography
            component="div"
            paddingLeft={styleTypography.padding_lg}
            fontSize={style.fonts.xl}
            marginTop={styleTypography.m_md}
          >
            Lucro Total:
            <Typography
              component="span"
              paddingLeft={0.5}
              color={style.pallete.tertiary}
              fontSize={style.fonts.xl}
            >
              {totalSales}
            </Typography>
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        ></StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
