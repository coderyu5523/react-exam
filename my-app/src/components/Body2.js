import React from 'react';

function Body2() {
    const [user,setUser] = useState({
        name :"홍길동",
        number : "01022223333"
    });
    const changeUser = () => {
        setUser({
            ...user,
            name :"임꺽정",number:"01033334444"
        });

    };


    return (
        <div>
            <div>이름 : {user.name}</div>
            <div>전화번호 : {user.number}</div>
            <button onClick={()=>changeUser()}>전화번호변경</button>
            
        </div>
    );
}

export default Body2;