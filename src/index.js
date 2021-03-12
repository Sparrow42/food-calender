import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { BBSApp } from './components/pages/bbsApp';
import { Header } from './components/header/header';
import { Footer } from './components/footer';
import { Home } from './components/pages/home';
import { FoodEdit } from './components/pages/foodEdit';
import { FoodReg } from './components/pages/foodReg';
import { myFoodList } from './components/pages/myFoodList';
import { MyFoodReg } from './components/pages/myFoodReg';
import { myExaciseList } from './components/pages/myExaciseList';

const App = () => {
    return (
        <>
            <Router>
              <Header styles={styles} /> 
              <Switch>
                <Route exact path='/bbs' component={BBSApp} /> 
                <Route exact path='/about' component={About} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/food/:foodId/edit' component={FoodEdit} />
                <Route exact path='/food/register' component={FoodReg} />
                <Route exact path='/myfood/list' component={myFoodList} />
                <Route exact path='/myfood/register' component={MyFoodReg} />
                <Route exact path='/myexacise/list' component={myExaciseList} />
                <Route exact path='/home' component={Home} />
                <Route component={Home} />
              </Switch>

              <Footer />
            
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