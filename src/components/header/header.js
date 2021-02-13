import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import SimpleTabs from './menuTab'
import MenuListComposition from './userInfo';

const Logo = (props) => {
  const {styles} = props;
  return (
      <>
        <div className='header-logo'>
            <img src='logo.PNG' />
        </div>
      </>

  );
};

export const Header = (props) => {
    const {styles} = props;
    //<SimpleTabs />
    return (
        <>
        <div className='header-wrapper'>           
            <Logo />

            <nav>
              <ul id="nav">
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
              </ul>
            </nav>

            <MenuListComposition />

            </div>
            
        </>

    );
};