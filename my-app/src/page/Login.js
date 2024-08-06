import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store';

function Login(props) {
    const navigate = useNavigate();  // 경로 변경할 때 
    const dispatch = useDispatch();  // redux store에 변경된 state값을 저장

    const [user,setUser] = useState({
        username:"",
        password:""

    });

    function loginProcess(){
        // 1. form 태그 username, password 가져오기
        let username = user.username;
        let password = user.password;

        // 2. 유효성 검사
        console.log("username",username);
        console.log("password",password);

        // 3. 통신

        // 4. store 상태변경
        dispatch(login());
        
        // 5. 화면 이동
        navigate("/loginComplete");

    }

    ///loginComplete 페이지로 이동
    function move() {
        navigate("/loginComplete");
      }

    function changeValue(e){
        // console.log(e);
        // console.log("e.target.value",e.target.value);
        // console.log("e.target.name",e.target.name);

        setUser({
            ...user,
            [e.target.name]:e.target.value,
          });

        // console.log("username",user.username);
        // console.log("password",user.password);

    }

    return (
        <div>
            <form>
                <input type='text' placeholder='username' onChange={changeValue} name="username" />
                <input type='password' placeholder='password' onChange={changeValue} name="password"/>
                <button type='submit' onClick={loginProcess}>로그인</button>
                </form>
            <button onClick={move}>로그인 안하고 넘어가기</button>
        </div>
    );
}

export default Login;