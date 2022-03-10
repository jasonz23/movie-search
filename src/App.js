
import './App.css';
import Modal from "./Modal/Modal.js"
import {useState, useEffect} from "react"
import Input from "./Input.js"
import Result from "./Result.js"

function App() {
  const [showModal, setModal] = useState(true)
  const [diff, setDiff] = useState(false)
  const [answer, setAnswer] = useState({
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    runtime: "92",
    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
    actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    plot: "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
    posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"


  })

  const changeModal = () => {
    setModal(!showModal)
  }

  useEffect(() => {
    console.log(answer.id)
    console.log(answer.title)
    console.log(answer.year)
    console.log(answer.runtime)
    console.log(answer.genres)
    console.log(answer.director)
  })
  return (
    <div>
      <h1 className = "title" onClick = {changeModal}>Show</h1>
      <Input answer = {answer} giveAnswer = {(params) => setAnswer(params)}  />
      {/* <button onClick = {changeModal}> show modal</button> */}
      <Modal onClose = {() => setModal(false)} show = {showModal} setDifficulty = {() => setDiff(!diff)} diff = {diff}/>
      <Result answer = {answer} />
    </div>
  );
}

export default App;
