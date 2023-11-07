import React from 'react';

function Header({ location, history }) {
	return (
		<header className='header'>
		  <strong>메뉴입니다.</strong>
		  <ul>
		  <li>
			  <a href='/'>Home</a>
			</li>
			<li>
			  <a href='/Blog'>Blog</a>
			</li>
			<li>
			  <a href='/Page2'>Page2(Redux)</a>
			</li>
			<li>
			  <a href='/MovieList'>MovieList(MobX)</a>
			</li>
		  </ul>
		</header>
	  );
}

export default Header;