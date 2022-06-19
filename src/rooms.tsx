import { ReactElement } from "react";

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FoundationIcon from '@mui/icons-material/Foundation';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export interface RoomDimensions {
  width: number,
  depth: number,
  height: number,
}

export interface RoomCapacity {
  atTables: number,
  seated: number,
  standing: number,
}

export interface RoomDimensions {
  width: number,
  depth: number,
  height: number,
}

export interface RoomDayRates {
  day: number,
  evening: number
}

export interface RoomRates {
  regular: RoomDayRates,
  friday: RoomDayRates,
  saturday: RoomDayRates
}

export interface RoomProps {
  id: string,
  name: string,
  photos: string[],
  icon: ReactElement,
  includes?: string[],
  includedWith?: string[],
  rates?: RoomRates,
  capacity?: RoomCapacity,
  maxCapacity?: RoomCapacity,
  dimensions?: RoomDimensions,
  features: string[],
  suggestedUses?: string[],
  outlinePoints?: number[], 
}

function constantDayRate(cost: number): RoomDayRates {
  return {day: cost, evening: cost};
}

function flatRate(cost: number): RoomRates {
  const d = constantDayRate(cost);
  return {regular: d, friday: d, saturday: d};
}
  
export const rooms: RoomProps[] = [
  {
    id: 'backroom',
    name: 'Rear Meeting Room',
    photos: [
      'rear-meeting-room.jpeg',
      'westerham-hall-external-2.jpeg'
    ],
    icon: <MeetingRoomIcon />,
    rates: flatRate(20),
    features: [
      'Sink with hot and cold water',
      'Direct access to an enclosed terrace',
      'A/V links to The Stage by special arrangement',
      'Direct access to the back of the stage'
    ],
    suggestedUses: [
      "Supervised children's parties",
      "Green Room for the stage"
    ],
    outlinePoints: [
      703, 550,
      802, 587,
      751, 759,
      642, 710,
    ],
  },
  {
    id: 'stage',
    name: "Stage",
    photos: [
      'stage-1.jpeg',
      'stage-2.jpeg'
    ],
    icon: <TheaterComedyIcon />,
    includedWith: ['mainhall'],
    dimensions: {width: 10, depth: 5, height: 4},
    features: [
      'Projection Screen'
    ],
    outlinePoints: [
      589, 462,
      717, 504,
      642, 688,
      494, 626,
    ],
  },
  {
    id: 'mainhall',
    name: "Main Hall",
    rates: {
      regular: {day: 65, evening: 65},
      friday: {day: 65, evening: 110},
      saturday: {day: 65, evening: 150}
    },
    photos: [
      'main-hall-1.jpeg',
      'main-hall-2.jpeg'
    ],
    includes: ['kitchen', 'stage'],
    icon: <FoundationIcon />,
    capacity: {atTables: 125, seated: 180, standing: 250},
    maxCapacity: {atTables: 250, seated: 250, standing: 350},
    dimensions: {width: 12.5, depth: 12.5, height: 5},
    features: [
      "A beechwood floor – great for dancing but no rubber soles or stilettos please!",
      "Induction loop for the hard of hearing",
      "30 tables (1.5m x .75m) & 200 padded chairs",
      "Free access to half the kitchen",
      "Full height sound proof partitions that split the room ¼ – ¾ along its length",
    ],
    suggestedUses: [
      "Clubs",
      "Birthday Parties",
      "Bingo",
      "Seated Dining",
      "Film Screenings",
      "Large Meetings"
    ],
    outlinePoints: [
      405, 372,
      597, 438,
      462, 677,
      260, 588,
      195, 576,
      318, 436,
      311, 417
    ],
  },
  {
    id: 'kitchen',
    name: "Kitchen",
    rates: undefined,
    photos: ['kitchen.jpeg'],
    includedWith: ['mainhall', 'frontroom'],
    icon: <KitchenIcon />,
    features: [
      "Plenty of work surfaces",
      "2 x 90cm ovens with grill",
      "2 x standard ovens with grill",
      "3 x gas hobs with 15 rings",
      "Large (16ft3) warming oven",
      "Microwave oven",
      "1 x large fridge",
      "1 x Foster’s commercial fridge (set to 2oC)",
      "(Wine, soft drinks etc. may be placed in a fridge to chill ahead of the hire period by special arrangement with the Hall Manager)",      
      "1 x Foster’s commercial freezer (set to -18oC)",
      "2 x Lincat water boilers (one each end)",
      "4 sinks with constant hot water",
      "Automatic commercial dish-washer with a three minute cycle",
      "Hire of crockery and glasses by arrangement",
      "Serving hatches to Main Hall and Front Meeting Room",
    ],
    outlinePoints: [
      188, 428,
      289, 472,
      233, 533,
      166, 520,
      177, 506,
      130, 482,
    ],
  },
  {
    id: 'frontroom',
    name: "Front Meeting Room",
    rates: flatRate(35),
    photos: ['front-meeting-room.jpeg'],
    includes: ['kitchen'],
    icon: <MeetingRoomIcon />,
    capacity: {atTables: 40, seated: 60, standing: 100},
    features: [
      "12 padded armchairs + additional chairs from the Main Hall",
      "Tables & chairs as required"
    ],
    suggestedUses: [
      "Clubs",
      "Birthday Parties",
      "Small Meetings"
    ],
    outlinePoints: [
      157, 350,
      244, 383,
      232, 398,
      220, 393,
      130, 482,
      50,  444,
      50,  405,
      84,  374,
      138, 367,
    ],
  },
  {
    id: 'toilets',
    name: "Toilets & Disabled Facilities",
    rates: undefined,
    photos: [],
    icon: <AccessibilityIcon />,
    features: [],
  },
  {
    id: 'exterior',
    name: "Grounds and Parking",
    rates: undefined,
    photos: [
      'westerham-hall-external-1.jpeg',
      'westerham-hall-external-2.jpeg',
      'westerham-hall-parking.jpeg'
    ],
    icon: <DirectionsCarIcon />,
    features: [],
  }
];