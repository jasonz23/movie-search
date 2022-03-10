
import './App.css';
import Modal from "./Modal/Modal.js"
import {useState} from "react"

function App() {
  const [showModal, setModal] = useState(true)
  const changeModal = () => {
    setModal(!showModal)
  }
  return (
    <div>
      <button onClick = {changeModal}> show modal</button>
      <Modal onClose = {() => setModal(false)} show = {showModal}/>
    </div>
  );
}

export default App;
