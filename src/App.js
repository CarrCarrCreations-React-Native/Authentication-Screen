import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from "./components/LoginForm";


export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAJkrr4mq4FTIjwCMmgc5gK-zhohOUhekc",
            authDomain: "aythentication-80ac0.firebaseapp.com",
            databaseURL: "https://aythentication-80ac0.firebaseio.com",
            projectId: "aythentication-80ac0",
            storageBucket: "aythentication-80ac0.appspot.com",
            messagingSenderId: "712755268277"
        });
    }

    render() {
        return (
            <View>
                <Header headerText={"Authentication"}/>
                <LoginForm/>
            </View>
        );
    }
};