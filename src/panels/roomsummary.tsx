import { ReactElement } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { rooms, RoomProps } from "../rooms"
import { NavLink } from "react-router-dom";

export interface RoomSummaryProps {
    room: RoomProps
  }

function RoomSummary(props: RoomSummaryProps): ReactElement {
  const {room} = props;

  const includedRooms = room.includedWith?.flatMap((soughtid) => rooms.find((room) => room.id === soughtid));

  return (
    <Box>
      <h2>{room.name}</h2>
      <Button variant="contained" component={NavLink} to="/facilities">
        Pick another room
      </Button>
      {
        room.features ?
          <>
            <h3>Features</h3>
            <ul>
              {room.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </>
        : <></>
      }
      {
        room.rates ?
          <>
            <h3>Rates</h3>
            <TableContainer>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Period</TableCell>
                    <TableCell>Sunday-<br />Thursday</TableCell>
                    <TableCell>Friday</TableCell>
                    <TableCell>Saturday</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Morning<br />8:30am – 1:00pm</TableCell>
                    <TableCell>£{room.rates.regular.day}</TableCell>
                    <TableCell>£{room.rates.friday.day}</TableCell>
                    <TableCell>£{room.rates.saturday.day}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Afternoon<br />1:30pm – 6:00pm</TableCell>
                    <TableCell>£{room.rates.regular.day}</TableCell>
                    <TableCell>£{room.rates.friday.day}</TableCell>
                    <TableCell>£{room.rates.saturday.day}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Evening<br />6:30pm – 11:45pm</TableCell>
                    <TableCell>£{room.rates.regular.evening}</TableCell>
                    <TableCell>£{room.rates.friday.evening}</TableCell>
                    <TableCell>£{room.rates.saturday.evening}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        : <></>
      }
      {
        includedRooms ?
          <>
            <h3>Rates</h3>
            <p>Included in:</p>
            <ul>
            {includedRooms.map((room) =>
              <li>
                <NavLink
                  style={{textDecoration: 'none'}}
                  to={`/facilities/${room?.id}`}
                >
                  {room?.name}
                </NavLink>
              </li>
            )}
            </ul>
          </>
        : <></>
      }
    </Box>        
  )
};

export default RoomSummary;