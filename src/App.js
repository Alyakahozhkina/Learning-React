import react from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import HomePage from './components/HomePage';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (
      <div className="ForApp">
        <div className="App">
        <BrowserRouter>
          <Header />
          <Route path='/' component={HomePage} />
          <Route path='/About' component={About}/>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
  );
}

export default App;





//       