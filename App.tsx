
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import CountryDetail from './pages/CountryDetail';
import Negotiation from './pages/Negotiation';
import NegotiationDetail from './pages/NegotiationDetail';
import Documents from './pages/Documents';
import DocumentEditor from './pages/DocumentEditor';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-smoky-black font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:countryId" element={<CountryDetail />} />
          <Route path="/negotiation" element={<Negotiation />} />
          <Route path="/negotiation/:countryId" element={<NegotiationDetail />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/:documentId" element={<DocumentEditor />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
