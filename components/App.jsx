import { useState } from 'react';
import './App.css';
import Nav from "./Nav"
import Brand from "./Brand"
import PromptBar from "./PromptBar"
import Modal from './Modal';

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="app">
      <Nav />
      <div className='mainSection'>
        <Brand />
        <PromptBar setOpenModal={setOpenModal} />
      </div>
      { openModal && <Modal setOpenModal={setOpenModal} /> }
    </div>
  );
}

export default App;
