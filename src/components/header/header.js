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
                  <Link to='/home'>ホーム</Link>
                </li>
                <li>
                  <Link to='/myfood/list'>Myフード</Link>
                </li>
                <li>
                  <Link to='/myexacise/list'>Myエクササイズ</Link>
                </li>
                <li>
                  <Link to='/usage'>使い方</Link>
                </li>
              </ul>
            </nav>

            <MenuListComposition />

            </div>
            
        </>

    );
};