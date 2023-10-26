/*eslint-disable*/

import React,{useState} from 'react';

function Blog(props) {

	let [title,titleChangeTo] = useState(["남자 코트 추천","모달창","커피 맛집"]);
	let[like,likeChangeTo] = useState(0);
	let post ='강남 고기 맛집';
	function titleChange(){
	  var newArray = [...title];
	  var text = "";
	  if(newArray[0] == "여자 코트 추천"){
		text = "남자 코트 추천";
	  }else{
		text = "여자 코트 추천";
	  }
	  newArray[0] = text;
	  titleChangeTo(newArray);
	}

    return (
	<div className="Blog"> 
      {/* <div className="black-nav">
        <div>Blog</div>
      </div> */}
      
      <div className="list">
        <h3>{ title[0] } <span onClick={()=>{ likeChangeTo(like+1) }}>👍</span> {like} </h3>
        <p>10월 24일 발행</p>
		<button onClick={titleChange}>제목변경</button>
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
export default Blog;