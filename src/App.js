//import logo from './logo.svg';
/*eslint-disable*/
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Page2 from './components/Page2';
import MovieList from './components/MovieList';

import './App.css';

function App() {
  
  return(
  <BrowserRouter>
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
        <Route path='/MovieList' element={<MovieList/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}
export default App;
