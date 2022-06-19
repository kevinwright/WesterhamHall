import { ReactElement } from "react";
import { rooms, RoomProps } from "../rooms"
import { Paper } from "@mui/material";
import { RoomSummaryProps } from "./roomsummary"

function RoomSuggestedUsesPanel(props: RoomSummaryProps): ReactElement {
  const {room} = props;

  return (
    room && room.suggestedUses ?
      <Paper
          sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          }}
      >  
        <h3>Suggested Uses</h3>
        <ul>
            {room.suggestedUses.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </Paper>
    : <></>
  )
};

export default RoomSuggestedUsesPanel;