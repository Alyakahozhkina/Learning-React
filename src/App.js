import react from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import HomePage from './components/HomePage';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
    </div>
    
  );
}

export default App;



// import {BrowserRoute, Route} from 'react-router';

//       <Route component={HomePage} />
//       <Route component={About}/>