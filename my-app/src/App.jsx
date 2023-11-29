// import "./App.css";

// const Article = (props) => {
//   return (
//     <article>
//       <h2>{props.title}</h2>
//       {props.body}
//     </article>
//   );
// };

// const Header = (props) => {
//   return (
//     <header>
//       <h1>
//         <a
//           href=""
//           onClick={(event) => {
//             event.preventDefault();
//             props.onChangeMode();
//           }}
//         >
//           {props.title}
//         </a>
//       </h1>
//     </header>
//   );
// };

// const Nav = (props) => {
//   const list = [];
//   for (let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     console.log(t);
//     list.push(
//       <li key={t.id}>
//         <a
//           id={t.id}
//           href={"/read/" + t.id}
//           onClick={(event) => {
//             // console.log("===============", event.target);
//             console.log("===============", event);
//             event.preventDefault();
//             props.onChangeMode(event.target.id);
//           }}
//         >
//           {t.title}
//         </a>
//       </li>
//     );
//   }

//   return (
//     <nav>
//       <ol>{list}</ol>
//     </nav>
//   );
// };

// function App() {
//   const topics = [
//     { id: 1, title: "html", body: "html is ..." },
//     { id: 2, title: "css", body: "css is ..." },
//     { id: 3, title: "js", body: "javascript is ..." },
//   ];
//   return (
//     <div>
//       <Header
//         title="React"
//         onChangeMode={() => {
//           // AudioListener("Header");
//           alert("Header");
//         }}
//       />
//       <Nav
//         topics={topics}
//         onChangeMode={(id) => {
//           alert(id);
//         }}
//       />
//       <Article title="Welcom" body="Hello , WEB" />
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList]=useState([])
  const addItem= () => {
    // console.log("im hererererere", inputValue)
    setTodoList([...todoList, inputValue])
  }
  return (
    <main>
      <input value ={inputValue} type='text' onChange=
      {(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

        <TodoBoard todoList={todoList}/>
      </main>
  );
}
export default App;

