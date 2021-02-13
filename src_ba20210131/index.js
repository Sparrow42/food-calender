import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { BBSApp } from './bbsApp';
import { Header } from './header';

const App = () => {
    return (
        <>
            <Router>
              <Header styles={styles} /> 
              <Switch>
                <Route exact path='/bbs' component={BBSApp} /> 
                <Route exact path='/about' component={About} />
                <Route exact path='/users' component={Users} />
                <Route component={Home} />
              </Switch>
            
            </Router>        
        </>
    );
};
 
/* 
<Route exact path='' component={BBSApp} /> 

<Switch>
<Route exact path=''>
    <BBSApp />
</Route>
<Route path='/about'>
    <About />
</Route>
<Route path='/users'>
    <Users />
</Route>
</Switch> */


const Home = () => {
    return <h2>Home</h2>;
  };

const About = () => {
  return (
    <>
      <h2>About</h2>
    </>
  );
};
  
const Users = () => {
  return <h2>Users</h2>;
}

const styles = { // スタイルを定義
    h1: {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: 24,
      padding: 12
    },
    form: {
      padding: 12,
      border: '1px solid silver',
      backgroundColor: '#F0F0F0'
    },
    right: {
      textAlign: 'right'
    }
  };

// DOMにメインコンポーネントを書き込む
ReactDOM.render(
    <App />,
    document.getElementById('root')
);