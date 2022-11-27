import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './components/Courses';

function App() {
  return (
    <div className="root">
      <div className="page">
        {/* <Header></Header> */}
        <Courses></Courses>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
