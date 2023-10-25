//import logo from './logo.svg';
/*eslint-disable*/
import React,{useState} from 'react';
import './App.css';

function App() {

  let [title,titleChangeTo] = useState(["남자 코트 추천","강남 우동 맛집","커피 맛집"]);
  let[like,likeChangeTo] = useState(0);
  let post ='강남 고기 맛집';
  return (
    <div className="App"> 
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <div className="list">
        <h3>{ title[0] } <span onClick={()=>{ likeChangeTo(like+1) }}>👍</span> {like} </h3>
        <p>10월 24일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>10월 24일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>10월 24일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
