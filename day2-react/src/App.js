// import logo from './logo.svg';
import './App.css';
import './CSS/First.css';
import First from './conponent/First';
import Say from './conponent/Say';
import InputState from './conponent/InputState';
import PageMove from './conponent/PageMove';
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