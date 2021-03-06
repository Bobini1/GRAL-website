import './custom.css';
import Navbar from './components/Navbar';
import FullWidthContainer from './components/FullWidthContainer';
import Welcome from './components/Welcome';
function App() {
  return (
    <FullWidthContainer>
      <Navbar></Navbar>
      <Welcome></Welcome>
    </FullWidthContainer>
  );
}

export default App;
