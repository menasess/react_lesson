import React from 'react';

function LogicalTest(props) {
    return props.title && (
        <div>
          <h3>사용하는 단축키{props.title}</h3>
        </div>
    );
}

export default LogicalTest;