import '../CSS/MyStyle.css'
//export default 를 함수 앞에서 지정할 수있다.
//이 파일에 함수 1개 밖에 없어서 같이 정의 했다.
export default function MyComponent(){
    //스타일 객체
    const title = {
        padding : '10px',
        color: 'skyblue'
    }
    return (
        <div className='box'>
            <h3 style={title}>첫번째 컴포넌트 테스트</h3>
            <p style={{backgroundColor: 'beige',margin: '23px'}}>
                1.CSS 스타일을 태그 안에서 정의 하기</p>
            <p>2.인라인 스타일을 객체로 정의하여 변수 활용하기.</p>
            <p>3.css 파일 import</p>
            <button style={title}>버튼을 클릭합니다.^^</button>
        </div>
    )
}