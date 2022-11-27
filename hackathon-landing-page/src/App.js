import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Terms from './components/Terms';
import HighlightOffers from './components/HighlightOffers';

function App() {
  return (
    <div className="root">
      <div className="page">
        {/* <Header></Header> */}
        <Courses></Courses>
        {/* <Terms></Terms> */}
        <HighlightOffers></HighlightOffers>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
