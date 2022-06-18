import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { ReactElement, useRef, useEffect, MutableRefObject } from "react";
import { Stage, Image, Layer, Text, Rect } from 'react-konva';
import useImage from "use-image";

import { rooms, RoomProps } from "../rooms"

const sceneHeight = 1000;
const sceneWidth = 1000;

const BaseImage = () => {
  const [image] = useImage('/orthoplan/baseline.png');
  return <Image key='baseimage' image={image} />;
};

interface RoomLayerProps {
  room: RoomProps,
  onRoomMouseEnter: (room: RoomProps) => void
  onRoomMouseLeave: (room: RoomProps) => void
  onRoomClick: (room: RoomProps) => void
}

function RoomLayer(props: RoomLayerProps): ReactElement {
  const {room, onRoomMouseEnter, onRoomMouseLeave, onRoomClick} = props;
  const [image] = useImage(`/orthoplan/layer-${room.id}.png`);
  const imgRef = useRef<Konva.Image | null>(null);

  const onMouseEnter = (evt: KonvaEventObject<MouseEvent>) => {
    evt.target.opacity(1.0);
    onRoomMouseEnter(room);
  };
  
  const onMouseLeave = (evt: KonvaEventObject<MouseEvent>) => {
    evt.target.opacity(0.001);
    onRoomMouseLeave(room);
  };

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.width() > 0 && img.height() > 0) {
      try {
        img.cache();
        img.drawHitFromCache(0.5);
      } catch(e) {}
    };
  });

  return <Image
    name='room'
    id={room.id}
    image={image}
    opacity={0.01}
    ref={imgRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={(evt) => onRoomClick(room)}
  />;
}


function TopImage(): ReactElement {
  const [image] = useImage('/orthoplan/all-on.png');
  return <Image
    key='topimage'
    name='topimage'
    id='topimage'
    image={image}
  />;  
};

interface RoomplanProps {
  stageRef: MutableRefObject<Konva.Stage | null>;
  onRoomSelected: (room: RoomProps) => void 
}

function Roomplan(props: RoomplanProps): ReactElement {
  const { stageRef, onRoomSelected } = props;

  const textRef = useRef<Konva.Text | null>(null);
  const rectRef = useRef<Konva.Rect | null>(null);

  const onStageMouseEnter = (evt: KonvaEventObject<MouseEvent>) => {
    stageRef.current?.findOne('#topimage').hide();
    rectRef.current?.hide()
    textRef.current?.show()
  };
  
  const onStageMouseLeave = (evt: KonvaEventObject<MouseEvent>) => {
    // Konva.shapes['topimage'].show()
    stageRef.current?.findOne('#topimage').show();
    textRef.current?.hide();
  };

  const onRoomMouseEnter = (room: RoomProps) => {
    textRef.current?.text(room.name)
  };
  
  const onRoomMouseLeave = (room: RoomProps) => {
  };

  const onRoomClick = (room: RoomProps) => {
    console.log(`layer clicked: ${room.id}`);
    onRoomSelected(room);
  };

  useEffect(() => {
    function handleResize() {
      var container = document.querySelector('#orthoplan-parent') as HTMLElement;

      // now we need to fit stage into parent container
      var containerWidth = container.offsetWidth;

      // but we also make the full scene visible
      // so we need to scale all objects on canvas
      var scale = containerWidth / sceneWidth;

      const stage = stageRef.current!;

      stage.width(sceneWidth * scale);
      stage.height(sceneHeight * scale);
      stage.scale({ x: scale, y: scale });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  return (
    <Stage
      width={sceneWidth}
      height={sceneHeight}
      onMouseEnter={onStageMouseEnter}
      onMouseLeave={onStageMouseLeave}
      ref={stageRef}
    >
      <Layer>
        <BaseImage />
        {rooms.map( (room) =>
          <RoomLayer
            key={`layer-${room.id}`}
            room={room}
            onRoomClick={onRoomClick}
            onRoomMouseEnter={onRoomMouseEnter}
            onRoomMouseLeave={onRoomMouseLeave}
          />
        )}
        <TopImage />
        <Rect fill="white" opacity={0.25} cornerRadius={10} x={32} y={32} width={400} height={64} ref={rectRef} />
        <Text x={40} y={40} fontSize={48} fill="white" text="Interactive Image" ref={textRef} />
      </Layer>
    </Stage>       
  );
};

export default Roomplan;