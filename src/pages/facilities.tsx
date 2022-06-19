import { ReactElement, useRef } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Roomplan from "../panels/roomplan"
import RoomSelectList from "../panels/roomselectlist";
import { rooms, RoomProps } from "../rooms";
import { useParams, useNavigate } from "react-router-dom";
import Konva from "konva";
import AutoResponsive from "autoresponsive-react"
import useDimensions from "react-cool-dimensions";
import RoomSummary from "../panels/roomsummary";


interface FacilitiesProps {
  containerWidth?: number
}

interface FacilitiesParams {
  selectedroomid: string
}

function Facilities(props: FacilitiesProps): ReactElement {
  const navigate = useNavigate();
  const { selectedroomid } = useParams<keyof FacilitiesParams>() as FacilitiesParams;
  const selectedroom = rooms.find((r) => r.id == selectedroomid)!

  const autoResponsiveRef = useRef<AutoResponsive | null>(null);
  const stageRef = useRef<Konva.Stage | null>(null);


  function onRoomSelected(room: RoomProps) {
    navigate(`/facilities/${room.id}`)
  }

  function onRoomListMouseOver(room: RoomProps) {
    const stage = stageRef.current;
    if (stage) {
      stage.findOne('#topimage').hide();
      stage.find('.room').forEach(
        (node) => {
          if(node.id() === room.id) {
            node.show();
            node.opacity(1.0);
          }
        }
      );
    }
  }

  function onRoomListMouseOut() {
    const stage = stageRef.current;
    if (stage) {
      console.log('deselecting all rooms')
      stage.find('.room').map(
        (node) => node.opacity(0.001)
      );
      stage.findOne('#topimage').show();
    }
  }

  return (
    <Grid container spacing={3} alignItems="stretch">
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
          id='roomlist-parent'
        >  
          {selectedroom ?
            <RoomSummary room={selectedroom} />
            :
            <>
              <h1>FACILITIES</h1>
              Click a region of the hall plan to learn more, or select one of the following:
              <RoomSelectList
                onRoomMouseEnter={onRoomListMouseOver}
                onRoomMouseLeave={() => {}}
                onListMouseLeave={onRoomListMouseOut}
                onRoomClick={onRoomSelected}
              />
            </>
          }
        </Paper>  
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Roomplan
          stageRef={stageRef}
          onRoomSelected={onRoomSelected}
        />
      </Grid>
    </Grid>
  )
};

export default Facilities;