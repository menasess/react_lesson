//props는 객체입니다.^^ 프로퍼티들이 부모 컴포넌트에서 속성으로 전달되면
//  그 값을 저장하기 위해 인자로 정의.
function MyComponentProps1({title='React',color='red'}) {
    const h3title = {
        padding : '10px',
        color //객체에서 프로포티 이름과 변수명이 같으면 하나만 쓴다.
    }
    console.log('MyComponentProps1 props:', title,color)
    return (
        //props객체는 title content 2객의 프로퍼티 값을 저장하도록 한다(부모 값 저장).
        
        <div className='box'>
            <h3 style={h3title}>{title}</h3>
            
            <p>객체의 구조를 분해 (비구조화)한 인자 정의</p>
            
        </div>
    );
}

export default MyComponentProps1;