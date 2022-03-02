import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Membership from '../components/Membership';
import Team from '../components/Team';
import Email from '../components/Email';
import Footer from '../components/Footer';
import { membershipData } from '../components/Membership/data';
import { featureData } from '../components/Features/data';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Membership data={membershipData} />
      <Features data={featureData} />
      <Team />
      <Email />
      <Footer />
    </>
  );
}

export default Home;
