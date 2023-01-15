import { Box, Button, Typography } from "@mui/material";
type ButtonOrderProps = {
  data: string;
  width?: number;
  back?: string;
  color?: string;
  p?: number;
  box?: string;
};
const ButtonOrder = (props: ButtonOrderProps) => {
  return (
    <Button
      sx={{
        borderRadius: "30px",
        mt: 4,
        mr: 1,
        mb: 2,
        width: props.width,
        background: props.back,
        color: props.color,
        p: props.p,
        boxShadow: props.box,
      }}
    >
      <Typography component="span" variant="subtitle2">
        {props.data}
      </Typography>
    </Button>
  );
};

export default ButtonOrder;
