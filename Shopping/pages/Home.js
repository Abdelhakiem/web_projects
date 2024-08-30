import React, { useState } from 'react';
import Card from '../components/Card';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';

const Home = () => {
    return (
      <div >
        <Hero />
        <LatestCollection />
        <BestSeller />

      </div>

    );
  };

export default Home;
