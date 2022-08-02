import './App.css';
import Header from './Header';
import Compatibility from './Compatibility';
import Today from './Today';
import Extras from './Extras'

function App() {
  return (
    <div className="appDiv">
      <h1>Co—Starbabes.</h1>
      <hr></hr>
      <Header />
      <Today />
      <Compatibility />
      <Extras />
      <br></br>
      <br></br>
      <footer className='footer'></footer>
  </div>
 
  );
}

export default App;


