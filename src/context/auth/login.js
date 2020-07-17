import React from 'react';
import { LoginContext } from './context';
import Show from '../../components/show/show'


class Login extends React.Component {
    static contextType = LoginContext;

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleSubmit = e => {
        e && e.preventDefault();
        this.context.login(this.state.username, this.state.password)
    }

    handleInputChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    }



    render(){
        return(
            <>
         <Show condition = {this.context.loggedIn}>
             <button onClick = {this.context.logout}> Logout </button>
         </Show>
         <Show condition={!this.context.loggedIn}>
             <form onSubmit = {this.handleSubmit}>
                 <input 
                 placeholder = 'username'
                 name = 'username'
                 onChange = {this.handleInputChange}
                  />
                  <input 
                  placeholder = 'Password'
                  name = 'password'
                  onChange = {this.handleInputChange}
                  />
                  <button> Login </button>
             </form>
         </Show>
         </>
        )
    }

}
export default Login;