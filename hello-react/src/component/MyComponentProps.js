//props는 객체입니다.^^ 프로퍼티들이 부모 컴포넌트에서 속성으로 전달되면
//  그 값을 저장하기 위해 인자로 정의.
function MyComponentProps(props) {
    const title = {
        padding : '10px',
        color: props.color
    }
    console.log('MyComponentProps props:',props)
    return (
        //props객체는 title content 2객의 프로퍼티 값을 저장하도록 한다(부모 값 저장).
        
        <div className='box'>
            <h3 style={title}>{props.title}</h3>
            <p>{props.content}</p>
            
        </div>
    );
}

export default MyComponentProps;