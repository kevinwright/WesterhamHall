import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { ReactElement } from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/photos/westerham-hall-external-1.jpeg',
    thumbnail: '/photos/westerham-hall-external-1.jpeg',
    description: 'Main Entrance'
  },
  {
    original: '/photos/entrance-ramp.jpeg',
    thumbnail: '/photos/entrance-ramp.jpeg',
    description: 'Entrance Ramp'
  },
  {
    original: '/photos/westerham-hall-parking.jpeg',
    thumbnail: '/photos/westerham-hall-parking.jpeg',
    description: 'Parking'
  },
  {
    original: '/photos/front-meeting-room.jpeg',
    thumbnail: '/photos/front-meeting-room.jpeg',
    description: 'Front Meeting Room'
  },
  {
    original: '/photos/kitchen.jpeg',
    thumbnail: '/photos/kitchen.jpeg',
    description: 'Kitchen'
  },
  {
    original: '/photos/main-hall-1.jpeg',
    thumbnail: '/photos/main-hall-1.jpeg',
    description: 'Main Hall'
  },
  {
    original: '/photos/main-hall-2.jpeg',
    thumbnail: '/photos/main-hall-2.jpeg',
    description: 'Main Hall'
  },
  {
    original: '/photos/stage-1.jpeg',
    thumbnail: '/photos/stage-1.jpeg',
    description: 'Stage'
  },
  {
    original: '/photos/stage-2.jpeg',
    thumbnail: '/photos/stage-2.jpeg',
    description: 'Stage'
  },
  {
    original: '/photos/rear-meeting-room.jpeg',
    thumbnail: '/photos/rear-meeting-room.jpeg',
    description: 'Rear Meeting Room'
  },
  {
    original: '/photos/westerham-hall-external-2.jpeg',
    thumbnail: '/photos/westerham-hall-external-2.jpeg',
    description: 'Rear Courtyard'
  },
];

function Home(): ReactElement {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container direction="column" spacing={3} alignItems="stretch">
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
              }}
            >
              <p>
                <strong>
                  Welcome to the best equipped and the most flexible modern community venue in this part of Kent.
                </strong>
              </p>
              <p>
                Purpose built in 1996, our doors are open to everyone from community groups and local organisations
                to commercial enterprises and private individuals. Westerham Hall is a registered, fully independent charity.
              </p>
              <p>
                Whether you're simply looking for a warm, comfortable room for a meeting; somewhere for your child's party
                (that's big enough to have a bouncy castle inside); the ideal setting to entertain 150 people with a
                four course meal, live band and dancing or any point between, we can happily accommodate you.
              </p>
            </Box>
          </Grid>
          <Grid container item direction="row" spacing={3} alignItems="stretch">
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <ImageGallery items={images} showBullets={true} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <p>We offer:</p>
                <ul>
                  <li>Three separately hireable spaces. The Main Hall can accommodate up to 250 people</li>
                  <li>A modern kitchen, recently re-equipped to an excellent standard</li>
                  <li>A large, curtained stage radio microphone etc. available</li>
                  <li>Full disabled access and facilities including an induction loop for the hard of hearing</li>
                  <li>Chairs and tables a-plenty (of course)</li>
                  <li>A fully licensed premises NB see relevant section under facilities for regulations.</li>
                </ul>        
              </Paper>
            </Grid>
          </Grid>  
          <Grid item>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
              }}
            >
              <p>
                From flower shows to a full-scale production of Chekhov or a concert; from yoga, dancing and
                weight watching classes to children's parties and anniversary banquets and from committee or
                sales meetings to boxing, pre-school and children's activities, lectures and antique fairs,
                Westerham Hall provides a home for just about anything.
              </p>
              <p>
                Businesses, too, are finding us a viable, and highly cost effective, alternative for weekday
                out-of-office meetings. We even provide details of caterers who'll cook you a meal or bring in sandwiches.
              </p>
              <p>
                Full details of our spaces and hire rates are listed here.
                If you have any questions or would like to book, please don't hesitate to contact the Hall Manager.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      
    </div>
  )
};

export default Home;