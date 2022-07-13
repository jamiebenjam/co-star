import './App.css';
import Header from './Header';
import Compatibility from './Compatibiliy';
import styled from "styled-components";

function App() {
  return (
    <Background>
    <div className="appDiv">
      <h1>Co—Starbabes.</h1>
      <hr></hr>
      <Header />
      <Compatibility />
  </div>
  </Background>

  );
}

export default App;

const Background = styled.div`
  padding-left: 25%;
  padding-right: 25%;
  color:white;
  background-color: #1a1c1a;
`
