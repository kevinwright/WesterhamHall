import { ReactElement } from "react";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { rooms, RoomProps } from "../rooms"

interface RoomSummaryProps {
    room: RoomProps
  }

function RoomSummary(props: RoomSummaryProps): ReactElement {
  const {room} = props;

  return (
    <Box>
        <h2>{room.name}</h2>
				{
					room.dimensions ?
						<>
							<h3>Dimensions</h3>
							<ul>
								width: {room.dimensions.width} metres
								<br />
								depth: {room.dimensions.depth} metres
								<br />
								height: {room.dimensions.height} metres
							</ul>
						</>
        	: <></>
				}
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
					room.suggestedUses ?
						<>
							<h3>Suggested Uses</h3>
							<ul>
								{room.suggestedUses.map((f) => <li key={f}>{f}</li>)}
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
											<TableCell>Day</TableCell>
											<TableCell>Morning<br />(8:30am – 1:00pm)</TableCell>
                      <TableCell>Afternoon<br />(1:30pm – 6:00pm)</TableCell>
                      <TableCell>Evening<br />(6:30pm – 11:45pm)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>Monday</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.evening}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Tuesday</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.evening}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Wednesday</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.evening}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Thursday</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.evening}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Friday</TableCell>
											<TableCell>£{room.rates.friday.day}</TableCell>
											<TableCell>£{room.rates.friday.day}</TableCell>
											<TableCell>£{room.rates.friday.evening}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Saturday</TableCell>
											<TableCell>£{room.rates.saturday.day}</TableCell>
											<TableCell>£{room.rates.saturday.day}</TableCell>
											<TableCell>£{room.rates.saturday.evening}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Sunday</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.day}</TableCell>
											<TableCell>£{room.rates.regular.evening}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</>
        	: <></>
				}
	    </Box>        
  )
};

export default RoomSummary;