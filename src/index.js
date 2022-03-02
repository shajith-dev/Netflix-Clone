import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profiles from './Profiles'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './LoginPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/profiles' element={<Profiles/>}/>
      <Route path='/home' element={<App/>}/>
    </Routes>
    {/* <App /> */}
    {/* <Profiles/> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
