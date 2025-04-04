// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
// import Projects from './components/Projects';
import Logo from './components/logo/Logo';

function App({inner}) {
  return (
    <div className="App">
      <Logo/>
      {/* <Projects/> */}
      <div className='h70'>{inner}</div>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <a href="https://www.google.com" rel="noreferrer" target="_blank">.</a>
      <Footer/>
    </div>
  );
}

export default App;
