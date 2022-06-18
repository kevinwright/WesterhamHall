import { ReactElement, useRef } from "react";
import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Roomplan from "../panels/roomplan"
import RoomSelectList from "../panels/roomselectlist";
import { RoomProps } from "../rooms";
import { useParams, useNavigate } from "react-router-dom";
import Konva from "konva";


interface FacilitiesParams {
  selectedroomid: string
}

function Facilities(): ReactElement {
  const navigate = useNavigate();
  const { selectedroomid } = useParams<keyof FacilitiesParams>() as FacilitiesParams;

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
            console.log(`matched ${room.id} at ${node.opacity()}`);
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
    <Box className="App">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12}>
            <h1>FACILITIES</h1>
          </Grid>  
          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              id='orthoplan-parent'
            >  
              <Roomplan
                stageRef={stageRef}
                onRoomSelected={onRoomSelected}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >  
              Click a region of the hall plan to learn more, or select one of the following:
              <RoomSelectList
                onRoomMouseEnter={onRoomListMouseOver}
                onRoomMouseLeave={() => {}}
                onListMouseLeave={onRoomListMouseOut}
                onRoomClick={onRoomSelected}
              />
            </Paper>  
          </Grid>
        </Grid>
      </Container>    
    </Box>
  )
};

export default Facilities;