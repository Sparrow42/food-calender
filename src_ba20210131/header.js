import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BBSApp } from './bbsApp';

export const Header = (props) => {
    const {styles} = props;
    return (
        <>
            <h1 style={styles.h1}>掲示板</h1>
            
            <nav>
              <ul>
                <li>
                  <Link to='/bbs'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
              </ul>
            </nav>

            
        </>

    );
};

/* <Router>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
              </ul>
            </nav>

            </Router> */
