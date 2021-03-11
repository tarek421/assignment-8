import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <div className='container'>
          <Navbar.Brand as={Link} to='/'>
            <img style={{width:'51px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" alt="Premiar league"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </div>
      </Navbar>


      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
