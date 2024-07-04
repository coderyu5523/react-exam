import React, { useState } from 'react';


function Body() {

    const [number,setNumber] = useState("01022223333");
    const changeNumber = () =>{
        setNumber("01033334444");
    }


    return (
        <div>
            <div>이름 : 홍길동</div>
            <div>전화번호 : {number}</div>
            <button onClick={changeNumber}>전화번호 변경</button>
        </div>
    );
}

export default Body;