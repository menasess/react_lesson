// import logo from './logo.svg';
import './App.css';
import './CSS/First.css';
import First from './First';
import Say from './Say';
import InputState from './InputState';
import PageMove from './PageMove';
// import InputState from './conponent/InputState';
// import Say from './conponent/Say';


function App() {
  return (
    <div className="App">
      <h2>Day2 App</h2>
      <First/>
      <Say name='john'/>
      
      <InputState/>
      <PageMove last = {10}/>
    </div>
  );
}

export default App;