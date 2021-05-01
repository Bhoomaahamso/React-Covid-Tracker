import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      className={`info_card ${active && "selected"} ${isRed && "red-top"}`}
      onClick={props.click}
    >
      <CardContent>
        <Typography>{title}</Typography>
        <h2 className={`infoBox_cases ${!isRed && "green"}`}>{cases}</h2>
        <Typography>{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
