import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FavFoodTable } from './myFoodTable';


const EditForm = () => {
    const [message, setMessage] = React.useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('次のメッセージが送信されました: ' + message);
    };
    
    return (
        <>
        <div className="foodedit-form-container">
        <form onSubmit={handleSubmit}>
            <p>名称：
                <input type="text" value={message} onChange={handleChange} /><br></br>
            </p>
            <p>画像：
                <input type="file" />
            </p>
            <input type="submit" value="更新" />
        </form>
        </div>
        </>
    );
};

export const FoodEdit = (props) => {
    const {styles} = props;
    return (
        <>
            <h2>5/17 - 「プリン」の編集</h2>
            <div className='titleunderbtn-container'>
                <Button variant="contained"><Link to='/home'>Homeに戻る</Link></Button>
                <Button variant="contained"><Link to='/food/:foodId/edit'>更新</Link></Button>
            </div>
            <EditForm />
            <FavFoodTable />
        </>

    );
};