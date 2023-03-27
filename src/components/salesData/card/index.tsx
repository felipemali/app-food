import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type BasicCardProps = {
  spacinngMl?: number;
  spacinngMr?: number;
  total?: number;
  description: string;
};

const BasicCard = ({
  total,
  description,
  spacinngMl,
  spacinngMr,
}: BasicCardProps) => {
  return (
    <Card sx={{ maxWidth: 175, ml: spacinngMl, mr: spacinngMr }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {total}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default BasicCard;
