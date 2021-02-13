import React from 'react';
import {
    Link
  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FavFoodTable } from './favFoodTable';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const RegForm = () => {
    const classes = useStyles();
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
        <div className="foodreg-form-container">
        <form onSubmit={handleSubmit}>
            <p>名称：
                <input type="text" value={message} onChange={handleChange} />
            </p>
            <p>画像：
                <input type="file" />
            </p>
            <input type="submit" value="登録" />
        </form>
        </div>
        </>
    );
};

export const FoodReg = (props) => {
    
    return (
        <>
            <h2>5/17の食べ物新規登録</h2>
            <div className='titleunderbtn-container'>
                <Button className="home-btn" variant="contained"><Link to="/home">Homeに戻る</Link></Button>
            </div>
            <RegForm />
            <FavFoodTable />
        </>

    );
};