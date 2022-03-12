import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home/Home';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import AboutUs from './pages/AboutUs/AboutUs';
import Teachers from './pages/Teachers/Teachers';
import LoginRegister from './pages/Login/LoginRegister/LoginRegister';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home> 
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/courses">
              <Courses></Courses>
            </Route>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/teachers">
              <Teachers></Teachers>
            </Route>
            <Route exact path="/login">
              <LoginRegister></LoginRegister>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
