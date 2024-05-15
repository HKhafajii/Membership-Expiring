import React from 'react';
import Grid from '@mui/material/Grid';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { amber } from '@mui/material/colors';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const twoTonePeopleColor = '#a1708a';
const veryRed = '#f13529';



const members = [
  {
    name: 'Barry L.',
    expiresIn: 'Expires in 2 days',
    hashtags: '#product, photography, healthcare, MI angel, new york, startups, fintech',
    avatar: '/Ben.jpeg',
  },
  {
    name: 'Ian B.',
    expiresIn: 'Expires in 3 days',
    hashtags: '#innovation, business strategy, chicago, techstartups, design',
    avatar: '/jim.jpeg',
  },
  {
    name: 'Lisa M.',
    expiresIn: 'Expires in 3 days',
    hashtags: '#founder, angel, teamlead, OH, innovator, tech, marketing, dev',
    avatar: '/kourtney.jpeg',
  },
];

const MemberCard = ({ member }) => {
  const matches = useMediaQuery('(max-width:1280px)');
  const smallScreen = useMediaQuery('(max-width:450px)');

  return (
    <Grid container alignItems="center" direction={matches ? 'column' : 'row'}>
      <Grid item>
        <Box
          component="img"
          sx={{
            height: smallScreen ? 100 : 150,
            width: smallScreen ? 75 : 125,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            paddingLeft: '10px',
          }}
          alt={member.name}
          src={member.avatar}
        />
      </Grid>
      <Grid item xs>
        <Typography variant={smallScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
          {member.name}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: veryRed }}>{member.expiresIn}</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body" textAlign="left">
          {member.hashtags}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Nunchie = () => {
  const theme = useTheme();
  const matchesSmall = useMediaQuery('(max-width:600px)');
  const matchesVerySmall = useMediaQuery('(max-width:450px)');

  useEffect(() => {
    document.body.style.backgroundColor = amber[50];
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <Box sx={{marginTop: 4}}>
      <Card
        elevation={2}
        sx={{
          width: matchesVerySmall ? '90%' : '50%',
          margin: matchesVerySmall ? '0 auto' : '0 100px',
          borderRadius: '25px',
        }}
      >
        <Grid container >
          <Grid item xs={12}>
            <CardHeader
              action={
                <IconButton>
                  <DragIndicatorIcon fontSize="large" style={{ opacity: 0.2 }} />
                </IconButton>
              }
              title={
                <Typography variant="h4" component="div">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: matchesSmall ? '0' : '50px',
                    }}
                  >
                    <Typography>
                      <PeopleAltTwoToneIcon
                        sx={{
                          color: twoTonePeopleColor,
                          fontSize: matchesSmall ? '1.5rem' : '2rem',
                        }}
                      />
                    </Typography>
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: {
                            xs: theme.typography.pxToRem(12),
                            sm: theme.typography.pxToRem(14),
                            md: theme.typography.pxToRem(16),
                            lg: theme.typography.pxToRem(18),
                            xl: theme.typography.pxToRem(20),
                          },
                        }}
                      >
                        Memberships Expiring:{' '}
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 900,
                            fontSize: {
                              xs: theme.typography.pxToRem(12),
                              sm: theme.typography.pxToRem(14),
                              md: theme.typography.pxToRem(16),
                              lg: theme.typography.pxToRem(18),
                              xl: theme.typography.pxToRem(20),
                            },
                          }}
                        >
                          5
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Typography>
              }
            />
            <Divider sx={{ margin: '0 20px', width: '75' }} />
          </Grid>

          <CardContent sx={{ margin: '0 20px' }}>
            <Grid container direction="column" spacing={2}>
              {members.map((member, index) => (
                <Grid item key={index}>
                  <MemberCard member={member} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Grid>
      </Card>
    </Box>
  );
};

export default Nunchie;
