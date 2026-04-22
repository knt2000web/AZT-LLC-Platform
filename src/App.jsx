import './index.css';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import OEMStrip     from './components/OEMStrip';
import Difference   from './components/Difference';
import Domains      from './components/Domains';
import Methodology  from './components/Methodology';
import GlobalReach  from './components/GlobalReach';
import InquiryForm  from './components/InquiryForm';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      {/* Google Material Symbols (icon font) */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <Navbar />
      <main>
        <Hero />
        <OEMStrip />
        <Difference />
        <Domains />
        <Methodology />
        <GlobalReach />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
