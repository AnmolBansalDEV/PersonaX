import './App.css';
import Nav from "./Nav"
import Brand from "./Brand"
import PromptBar from "./PromptBar"
import LowerSection from './LowerSection';

function App() {
  return (
    <div className="app">
      <Nav />
      <Brand />
      <PromptBar />
      <LowerSection />
    </div>
  );
}

export default App;
