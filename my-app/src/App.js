import './App.css';

// 전개 연산자
// let user = {name:"홍길동",age:20};
// let user1 = {...user,age:21};
// console.log(user);
// console.log(user1);

// filter 사용
// const b = [4,5,6];

// let b1 = b.filter((item)=>item !==5);

// console.log(b);
// console.log(b1);

//map 사용
// let postList = [
//   {id : 1, title:"제목1",content:"내용1"},
//   {id : 2, title:"제목2",content:"내용2"},
//   {id : 3, title:"제목3",content:"내용3"}
// ];
// let post = postList.map((item)=>({
//   ...item,
//   content:"내용변경"
// }));
// console.log(postList)
// console.log(post);

let list =[1,2,3,4];

function App() {
  return (
  <div>
<div>1</div>
<div>2</div>
<div>3</div>
{list.map((i)=>
<h1>{i}</h1>
)}

  </div>
)}

export default App;
