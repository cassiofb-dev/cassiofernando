import React from 'react';

import Hero from '../components/Hero';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="index">
      <SEO />
      <Hero />
    </div>
  );
}
