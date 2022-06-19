import { ReactElement } from "react";
import { rooms, RoomProps } from "../rooms"
import { Paper } from "@mui/material";
import { Card } from "@mui/material";
import { RoomSummaryProps } from "./roomsummary"

function RoomDimensionsPanel(props: RoomSummaryProps): ReactElement {
  const {room} = props;

  return (
    room && room.dimensions ?
      <Card
          sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          }}
      >  
        <h3>Dimensions</h3>
        <ul>
            width: {room.dimensions.width} metres
            <br />
            depth: {room.dimensions.depth} metres
            <br />
            height: {room.dimensions.height} metres
        </ul>
      </Card>
    : <></>
  )
};

export default RoomDimensionsPanel;