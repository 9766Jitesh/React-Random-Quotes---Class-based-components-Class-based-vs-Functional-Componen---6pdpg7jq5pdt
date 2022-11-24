import React,{useEffect, useState} from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

  
const App = () => {
  const [post,setPost]=useState('content');
  const[author,setAuthor]=useState('author');
  const[color,setColor]=useState(colors[0])
  
  useEffect(()=>{
     getData();
  },[])
 
    async function getData() {
    const response = await fetch('https://api.quotable.io/random');
    const result = await response.json();
    console.log(result.content);
    setPost(result.content);
    setAuthor(result.author);
    setColor(colors[Number.parseInt(Math.random()*10)]);
    console.log(colors[Number.parseInt(Math.random()*10)])
    }
    

  
    return (
      <div id="main">
        <div id="wrapper"   style={{backgroundColor:`${color}`}}>
          
          <div className="quote-text">{post}</div>
          <div className="quote-author">{author}</div>
          <button   onClick={getData} id="new-quote">Next Quotes</button>
        </div>
      </div>
    );
};

export default App;
