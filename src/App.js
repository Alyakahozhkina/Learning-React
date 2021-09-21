import react from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import HomePage from './components/HomePage';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="ForApp">
        <div className="App">
        
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

