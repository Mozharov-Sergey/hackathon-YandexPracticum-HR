import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Job from './components/Job/Job';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header></Header>
        <Reviews />
        <Job />
        <Footer />
      </div>
    </div>
  );
}

export default App;
