import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Page2(props) {
	const reduxData = useSelector((state) => state);
	const dispatch = useDispatch()
    return (
		<div>
			<h1>Page2</h1>
			<p>common state data : {reduxData}</p>
			<button onClick={()=>{ dispatch({type :'증가'})}}>더하기</button>
			<button onClick={()=>{ dispatch({type :'감소'})}}>빼기</button>
		</div>
    );
}

export default Page2;