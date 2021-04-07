import './App.css'
import Menu from './Components/Menu'
import Header from './Components/Header'
import { Container} from 'react-bootstrap'

const App = () => {
  return (
    <div className="App">
      <Container className='main'>
      <Header></Header>
      <Menu></Menu>
      </Container>
    </div>
  );
}


export default App;
