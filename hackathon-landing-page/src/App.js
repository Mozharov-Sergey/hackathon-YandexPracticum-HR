import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Job from './components/Job/Job';
import Reviews from './components/Reviews/Reviews';
import Courses from './components/Courses';
import Terms from './components/Terms';
import HighlightOffers from './components/HighlightOffers';
import Test from './components/Test'

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header></Header>
        <Instructions></Instructions>
        <Test></Test>
        <Courses></Courses>
        <Terms></Terms>
        <HighlightOffers></HighlightOffers>
        <Reviews />
        <Job />
        <Footer />

      </div>
    </div>
  );
}

export default App;
