import { FunctionComponent } from 'react';
import { Button, Container, Icon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export const Home: FunctionComponent = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/videos/sunset_boat_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <div className="relative z-10 flex h-full items-center justify-center bg-black/50">
        <Container maxWidth="md" className="text-center text-white">
          <Typography
            variant="h3"
            className="landing_title"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Georgia, serif',
              fontSize: {
                xs: '3rem',
                sm: '4rem',
                md: '5rem',
                lg: '7rem'
              }
            }}
          >
            Welcome to Agram Logistics
          </Typography>

          <Typography
            variant="h6"
            className="pt-8 pb-4 text-spanish_orange-900/80"
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.25rem'
              }
            }}
          >
            A place where you can find professional solutions in the TSL industry. Professional and efficient service. Quick quotes. Contact our forwarders.
          </Typography>
          <div className="my-6 text-xl font-light text-white-400">
            {/* <TypeAnimation
              sequence={[
                '“Transporting goods with care, delivering trust everywhere.”',
                3000,
                '“Logistics is the art of making the complex simple.”',
                3000,
                '“In every mile traveled, we connect the world closer.”',
                3000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}
          </div>

          {/* <Button
            component={Link}
            to="/journal"
            endIcon={<Icon>chevron_right</Icon>}
            sx={{
              backgroundColor: 'rgba(197, 218, 27, 0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(197, 218, 27, 0.3)',
              color: '#fff',
              paddingX: 3,
              paddingY: 1.5,
              fontWeight: 'bold',
              borderRadius: 2,
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(197, 218, 27, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }
            }}
          >
            Nightly Review and Gratitude
          </Button> */}
        </Container>
      </div>
    </main>
  );
};
