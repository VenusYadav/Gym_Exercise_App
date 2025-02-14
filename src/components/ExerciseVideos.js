import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' }, backgroundColor: 'black', p: '20px' }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, fontWeight: 700, color: 'white', mb: '33px', ml: '33px' }}>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0px' },
          ml: '33px',
          pb:'90px', // 50px padding for top and bottom
        }}
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' }, fontWeight: 600, color: 'white' }}>
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="white">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
