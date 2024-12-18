
import List from './component/List';
import './CSS/MyStyle.css';

function App() {
  const twice = ['사나','모모','나연','채연'];
  return (
    <div className="App">
      <List names={['a','b','c','d']}/>
      <List names={twice}/>
    </div>
  );
}

export default App;
