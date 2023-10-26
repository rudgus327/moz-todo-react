import React from 'react';

function Header({ location, history }) {
	return (
		<header className='header'>
		  <strong>React Test</strong>
		  <ul>
		  <li>
			  <a href='/'>Home</a>
			</li>
			<li>
			  <a href='/Blog'>Blog</a>
			</li>
			<li>
			  <a href='/Page2'>Page2</a>
			</li>
		  </ul>
		</header>
	  );
}

export default Header;