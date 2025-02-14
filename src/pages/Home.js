import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
  <HeroBanner />
  <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
  <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
</Box>

  );
};

export default Home;
