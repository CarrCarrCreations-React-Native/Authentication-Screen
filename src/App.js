import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common';
import LoginForm from "./components/LoginForm";


class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAJkrr4mq4FTIjwCMmgc5gK-zhohOUhekc",
            authDomain: "aythentication-80ac0.firebaseapp.com",
            databaseURL: "https://aythentication-80ac0.firebaseio.com",
            projectId: "aythentication-80ac0",
            storageBucket: "aythentication-80ac0.appspot.com",
            messagingSenderId: "712755268277"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {

        const {viewStyle, spinnerStyle} = styles;

        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={viewStyle}>
                        <Button>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <View style={spinnerStyle}>
                        <Spinner/>
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText={"Authentication"}/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        marginTop: 10,
        flexDirection: 'row'
    },
    spinnerStyle: {
        marginTop: 50,
    }
};

export default App;