import Header from './components/Header';
import Footer from './components/Footer';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header></Header>
        <Instructions></Instructions>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
