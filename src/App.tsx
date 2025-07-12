import { useState } from 'react'
// import { Countdown } from "./components/Countdown";
import './App.css'
import { Home } from './components/Home';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Committee } from './components/Committee';
import { History } from './components/History';
import { Announcements } from './components/Announcements';
import { Donation } from './components/Donation';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Elders } from './components/Elders';
import { FullGallery } from "./components/FullGallery";

function App() {

 const [fullGalleryYear, setFullGalleryYear] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        {fullGalleryYear ? (
          <FullGallery
            year={fullGalleryYear}
            onClose={() => setFullGalleryYear(null)}
          />
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 text-gray-800 px-4 py-8 font-[Poppins] relative">
            <Home />
            <div id="about" className="mt-12"><About /></div>
            <div id="gallery" className="mt-12">
              <Gallery onMore={(year) => setFullGalleryYear(year)} />
            </div>
            <div id="committee" className="mt-12"><Committee /></div>
            <div id="Elders" className="mt-12"><Elders /></div>
            <div id="history" className="mt-12"><History /></div>
            <div id="announcements" className="mt-12"><Announcements /></div>
            <div id="donate" className="mt-12"><Donation /></div>
            <div id="contact" className="mt-12"><Contact /></div>
          </div>
        )}
      </main>
    </>
  );
}

export default App
