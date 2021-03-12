import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { MyFoodRegForm } from './myFoodRegForm';

export const MyFoodReg = (props) => {
    return (
        <>
            <h2>Myフード新規登録</h2>
            <MyFoodRegForm />
        </>
    );
};