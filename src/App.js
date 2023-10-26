//import logo from './logo.svg';
/*eslint-disable*/
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {

  let [title,titleChangeTo] = useState(["남자 코트 추천","강남 우동 맛집","커피 맛집"]);
  let[like,likeChangeTo] = useState(0);
  let post ='강남 고기 맛집';
  function titleChange(){
    var newArray = [...title];
    newArray[0] = "여자 코트 추천";
    titleChangeTo(newArray);
  }
  return (
    <div className="App"> 
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <button onClick={titleChange}>제목변경</button>
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
        
      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
