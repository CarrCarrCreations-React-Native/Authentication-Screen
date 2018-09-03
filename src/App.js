import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common';
import LoginForm from "./components/LoginForm";


class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {

        const apiKey = process.env['apiKey'];
        const authDomain = process.env['authDomain'];
        const databaseURL = process.env['databaseURL'];
        const projectId = process.env['projectId'];
        const storageBucket = process.env['storageBucket'];
        const messagingSenderId = process.env['messagingSenderId'];

        console.log("API KEYS: " + apiKey);

        firebase.initializeApp({
            apiKey: apiKey,
            authDomain: authDomain,
            databaseURL: databaseURL,
            projectId: projectId,
            storageBucket: storageBucket,
            messagingSenderId: messagingSenderId
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
                        <Button onPress={() => firebase.auth().signOut()}>
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