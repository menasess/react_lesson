import logo from './logo.svg';
import './CSS/MyStyle.css';
import MyComponent from './component/MyComponent';
import MyComponentProps from './component/MyComponentProps';
import MyComponentProps1 from './component/MyComponentProps1';
import LogicalTest from './component/LogicalTest';

function App() {
  return (
    <div className="App">
      <h1>Hello words</h1>
      <MyComponent/>
      <hr/>
      {/* 컴포넌트의 속성은 개발자가 이미로 만든다. 데이터를 전달하려는 목적 (부모가 자식에게) */}
      <MyComponentProps title="Props(프톱스)" content="props는 여러 프로퍼티 저장 객체"
      color="orange"/>
       <MyComponentProps1 title="객체 비구조화" color="brown"/>
       <MyComponentProps1/>
       <LogicalTest/>
       <LogicalTest title="React"/>
    </div>
  );
}

export default App;
