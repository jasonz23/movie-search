import './App.css';
import AboutModal from "./AboutModal/AboutModal.js"
import {useState, useEffect} from "react"
import Input from "./Input.js"
import Result from "./Result.js"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'


function App() {
  const [showModal, setModal] = useState(true)
  const [diff, setDiff] = useState(false)
  //solution
  //counter
  const [answer, setAnswer] = useState({
    id: 0,
    title: "",
    year: "",
    runtime: "",
    genres: ["",],
    director: "",
    actors: "",
    plot: "",
    posterUrl: ""


  })

  const changeModal = () => {
    setModal(!showModal)
  }

  useEffect(() => {
        //console.log(showModal)
        console.log(diff)
    })

  // useEffect(() => {
  //   console.log(answer.id)
  //   console.log(answer.title)
  //   console.log(answer.year)
  //   console.log(answer.runtime)
  //   console.log(answer.genres)
  //   console.log(answer.director)
  // })

  return (
    <Container>
      <Row>
        <AboutModal onClose = {() => setModal(false)} show = {showModal} setDifficulty = {() => setDiff(!diff)} diff = {diff}/>
        <h1 className = "title" onClick = {changeModal}>Show</h1>

        <Col>

          <Result answer = {answer} />
        </Col>
        <Col>
          <Input answer = {answer} giveAnswer = {(params) => setAnswer(params)}  />
        </Col>

      </Row>
      
      
      
    </Container>
  );
}

export default App;
