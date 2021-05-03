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
            <img src='/img/product_logo.PNG' />
        </div>
      </>

  );
};

export const Header = (props) => {
    const {styles} = props;
    //<SimpleTabs />
    return (
        <>
        <header className='header-wrapper'>           
            <Logo />

            <nav>
              <ul id="nav">
                <li>
                  <Link to='/home'>HOME</Link>
                </li>
                <li>
                  <Link to='/myfood/list'>MY Food</Link>
                </li>
                <li>
                  <Link to='/myexacise/list'>MY Exacise</Link>
                </li>
                <li>
                  <Link to='/usage'>USAGE</Link>
                </li>
              </ul>
            </nav>

            <MenuListComposition />

            </header>
            
        </>

    );
};