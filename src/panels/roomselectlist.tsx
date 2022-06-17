import { ReactElement } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { rooms, RoomProps } from "../rooms"

interface RoomSelectListProps {
  onRoomMouseEnter: (room: RoomProps) => void
  onRoomMouseLeave: (room: RoomProps) => void
  onListMouseLeave: () => void
  onRoomClick: (room: RoomProps) => void
}

function RoomSelectList(props: RoomSelectListProps): ReactElement {
  const {onRoomMouseEnter, onRoomMouseLeave, onListMouseLeave, onRoomClick} = props;

  return (
    <List onMouseOut={onListMouseLeave} >
      {rooms.map( (room) =>
        <ListItem disablePadding key={room.id}>
          <ListItemButton
            onMouseOver={() => onRoomMouseEnter(room)}
            onMouseOut={() => onRoomMouseLeave(room)}
            onClick={() => onRoomClick(room)}
          >
            <ListItemIcon>
                {room.icon}
            </ListItemIcon>
            <ListItemText primary={room.name} />
          </ListItemButton>
        </ListItem>
      )}
    </List>        
  )
};

export default RoomSelectList;