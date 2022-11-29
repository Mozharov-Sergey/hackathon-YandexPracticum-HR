import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Job from './components/Job/Job';
import Reviews from './components/Reviews/Reviews';
import Courses from './components/Courses';
import Terms from './components/Terms';
import HighlightOffers from './components/HighlightOffers';
import Test from './components/Test'
import Questions from './components/Questions/Questions';
import Intro from './components/Intro'
import { useState } from 'react';
import Popup from './components/Popup/Popup';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('notSelected')

  const handleClick = () => {
    setPopupOpen(true)
  }

  function closeAllPopups() {
    setPopupOpen(false)
  }

  return (
    <div className="root">
      <div className="page">
        <Header handleClick={handleClick} setSelectedRole={setSelectedRole}/>
        <Intro />
        <Instructions handleClick={handleClick} setSelectedRole={setSelectedRole}/>
        <Test />
        <Courses />
        <Terms handleClick={handleClick} setSelectedRole={setSelectedRole}/>
        <HighlightOffers />
        <Reviews />
        <Job />
        <Questions/>
        <Footer />
        <Popup isOpen={popupOpen} selectedRole={selectedRole} setSelectedRole={setSelectedRole} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
