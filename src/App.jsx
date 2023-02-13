import './App.css';
import Nav from "./Nav"
import Brand from "./Brand"
import PromptBar from "./PromptBar"
import LowerSection from './LowerSection';
import Accordion from './Accordion';

function App() {

  return (
    <div className="app">
      <Nav />
      <div className='mainSection'>
        <Brand />
        <PromptBar />
      </div>
    </div>
  );
}

export default App;
