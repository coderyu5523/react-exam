import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Home(props) {

  // let [user,setUser] = useState({
  //   id : undefined,
  //   username:"",
  //   password:""
  // })
 
  const navigate = useNavigate();

  function moveAbout() {
    navigate("/about");
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={moveAbout}>소개페이지이동</button>
    </div>
  );
}

export default Home;
