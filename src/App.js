import './App.css';
import Navbar from './components/Navbar';
import Navbarpropstype from './components/Navbarpropstype';
import Textform from './components/Textform';

function App() {
  return (
    <>
      {/* <Navbar title="textUtils"/> */}
      {/* <Navbarpropstype title="Prop"/> */}
      {/* <Navbarpropstype/> */}
      <div className="container">
      <Textform title="Enter text below"/>
      </div>
    </>
  );
}

export default App;
