import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = 'https://lab-32.herokuapp.com/todo'

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor( props ){
        super(props)
        this.state = { 
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            user: {},
        }
    }
    login = async ( userName, password ) => {
        try {
            let results = await fetch( `${API}/signin`,{
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: new Headers({
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                })
            })
            let jsonResult = await results.json();
            this.validateToken (res.token);
        } catch (error) {
            console.log(error);
        }
    }

    logout = () => {
        this.setLoginState(false, null, {})
    }


    validateToken = token => {
        try {
            let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'supersecret');
            this.setLoginState(true, token, user)
        } catch (error) {
            this.logout();
            console.log(error);
        }
    }



    setLoginState = (loggedIn, token, user)=> {
        cookie.save('auth', token);
        this.setState({loggedIn, token, user})
    }

    componentDidMount() {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null; 
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value = {this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;