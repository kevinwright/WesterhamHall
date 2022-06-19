import { ReactElement, useRef } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Roomplan from "../panels/roomplan"
import RoomSelectList from "../panels/roomselectlist";
import { rooms, RoomProps } from "../rooms";
import { useParams, useNavigate } from "react-router-dom";
import Konva from "konva";
import AutoResponsive from "autoresponsive-react"
import RoomSummary from "../panels/roomsummary";
import RoomDimensionsPanel from "../panels/roomdimensionspanel";
import RoomSuggestedUsesPanel from "../panels/roomsuggestedusespanel";


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
      <Grid item xs={12} md={selectedroom ? 8 : 6} lg={selectedroom ? 8 : 6}>
        <Box>
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
        </Box>
      </Grid>
      <Grid item xs={12} md={selectedroom ? 4 : 6} lg={selectedroom ? 4 : 6}>
        <Box>
          <Roomplan
            selectedRoom={selectedroom}
            stageRef={stageRef}
            onRoomSelected={onRoomSelected}
          />
          <RoomDimensionsPanel
            room={selectedroom}
          />
          <RoomSuggestedUsesPanel
            room={selectedroom}
          />
        </Box>
      </Grid>
    </Grid>
  )
};

export default Facilities;