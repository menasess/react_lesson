//함수 컴포넌트  //다른 방법 : 클래스 컴포넌트.(과거 예전 방법)
function AppNew() {
  //자바스크립트 문법으로 데이터 저장. if.for.기존 메소드 사용,
  // 반드시 부모 요소 1개를 리턴합니다.
  return (
    <div>
      <h3>App 컴포넌트 새로 만들기.</h3>
      <hr/>
       <button>버튼을 클릭합니다.^^</button>
    </div>
  );  //JSX 문법 
}
//다른 컴포넌트에서 사용하려면 export 반드시 지정해야 한다.
export default AppNew;
