import React from 'react';
import LoginBar from '../components/LoginBar';
import '../css/login.css';
import LoginService from '../services/LoginService';
import swal from 'sweetalert';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let user={
            username: this.state.username, password: this.state.password
        };
        LoginService.login(user).then((res)=>{
            if(res.data==="SUCCESS")
            {
                localStorage.setItem('Username',this.state.username)
                this.props.isLogin(true)
            }
            else
            {
                swal({
                    title: "Error",
                    text: "Invalid username or password",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
            }
        })
    }

    handleUsernameChange=(event)=>{
        this.setState({username: event.target.value});
    }

    handlePasswordChange=(event)=>{
        this.setState({password: event.target.value});
    }

    render(){
        return(
            <>
            <LoginBar/>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" autoComplete='off' name="username" value={this.state.username} required onChange={this.handleUsernameChange}/>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" autoComplete='off' name="password" value={this.state.password} required onChange={this.handlePasswordChange}/>
                </div>
                <button className='login-button' onSubmit={this.handleSubmit}>Login</button>
                </form>
            </div>
            <br/><br/><br/><br/>
            </> 
        )
    }
}


export default Login