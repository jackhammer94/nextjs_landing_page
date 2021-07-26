import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../components/AppBar';
import Pitch from '../components/Pitch';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Screenshots from '../components/Screenshots';
import { Container } from '@material-ui/core';

export default function Landing() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <main>
          <Pitch />
          <Screenshots />
          <Features />
          <Pricing />
          <Footer />
        </main>
      </Container>
    </React.Fragment>
  );
}
