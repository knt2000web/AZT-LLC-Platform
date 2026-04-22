import './index.css';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import OEMStrip     from './components/OEMStrip';
import Difference   from './components/Difference';
import Domains      from './components/Domains';
import Methodology  from './components/Methodology';
import GlobalReach  from './components/GlobalReach';
import AboutUs      from './components/AboutUs';
import InquiryForm  from './components/InquiryForm';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      {/* Google Material Symbols (icon font) */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />

      <Navbar />
      <main>
        <Hero />
        <OEMStrip />
        <Difference />
        <Domains />
        <Methodology />
        <GlobalReach />
        <AboutUs />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
