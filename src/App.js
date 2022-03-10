
import './App.css';
import Modal from "./Modal/Modal.js"
import {useState} from "react"
import Input from "./Input.js"

function App() {
  const [showModal, setModal] = useState(true)
  const changeModal = () => {
    setModal(!showModal)
  }
  return (
    <div>
      <h1 className = "title" onClick = {changeModal}>Showdle</h1>
      <Input />
      <button onClick = {changeModal}> show modal</button>
      <Modal onClose = {() => setModal(false)} show = {showModal}/>
    </div>
  );
}

export default App;
