import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Membership from '../components/Membership';
import Team from '../components/Team';
import Email from '../components/Email';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Membership />
      <Team />
      <Email />
      <Footer />
    </>
  );
}

export default Home;
