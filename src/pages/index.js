import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Membership from '../components/Membership';
import Team from '../components/Team';
import Email from '../components/Email';
import Footer from '../components/Footer';
import { membershipData } from '../components/Membership/data';
import { featureData } from '../components/Features/data';
import { slideData } from '../components/Team/data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Membership data={membershipData} />
      <Features data={featureData} />
      <Team slides={slideData} show={2} />
      <Email />
      <Footer />
    </>
  );
}

export default Home;
