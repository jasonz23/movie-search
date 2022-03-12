import './App.css';
import AboutModal from "./Modal/AboutModal.js"
import {useState, useEffect} from "react"
import Input from "./Input.js"
import Result from "./Result.js"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'
import {isMobile} from 'react-device-detect';


function App() {
  const [showModal, setModal] = useState(true)
  const [diff, setDiff] = useState(false)
  //solution
  //counter
  const [answer, setAnswer] = useState([])

  const changeModal = () => {
    setModal(!showModal)
  }

  useEffect(() => {
        //console.log(showModal)
        console.log(diff)
        console.log(isMobile);
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

  <div className = "main" >
    <Container  >
      <Row >
        <AboutModal onClose = {() => setModal(false)} show = {showModal} setDifficulty = {() => setDiff(!diff)} diff = {diff}/>
        <h1 className = "title" onClick = {changeModal}>Movie Search</h1>

        {/* <Col className = {() => {
          if (isMobile) {
            return "col-xl-6 col-sm-12"
          } else {
            return "col-xl"
          }
        }
        } >
          <Input answer = {answer} giveAnswer = {(params) => setAnswer(params)}  />
        </Col>
        <Col className = {() => {
          if (isMobile) {
            return "col-xl-6 col-sm-12"
          } else {
            return "col-xl"
          }
        }
        }> </Col>*/}
        {/* <Row>
          <Col className = "col-xl-6 col-sm-12"> 
          <Input answer = {answer} giveAnswer = {(params) => setAnswer(params)}  /></Col>
          <Col className = "col-xl-6 col-sm-12">
            <Result answer = {answer} />
          </Col>
        </Row> */}
        <Row>
          <Col> 
            <Input answer = {answer} giveAnswer = {(params) => setAnswer(params)}  />
            <div className = "result">
              <Result answer = {answer}/>
            </div>
            
          </Col>
        </Row>

    

        

      </Row>

      
      
      
    </Container>
    </div>
   
 
  );
}

export default App;
