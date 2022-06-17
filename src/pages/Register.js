import React from "react";
import LoginBar from "../components/LoginBar";
import RegisterService from "../services/RegisterService";
import 'react-toastify/dist/ReactToastify.css'; 
import swal from 'sweetalert';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            username: '',
            password: '',
            email: '',
            age: '',
            dob: '',
            phno: ''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeUsernameHandler=this.changeUsernameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.changeDobHandler=this.changeDobHandler.bind(this);
        this.changePhnoHandler=this.changePhnoHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }

    saveUser=(e)=>{
        e.preventDefault();
        let user={
            name: this.state.name, username: this.state.username, password: this.state.password,
            email: this.state.email, age: this.state.age, dob: this.state.dob, phno: this.state.phno
        };
        RegisterService.createUser(user).then((res)=>{
            swal({
                title: "Success",
                text: "Registered Successfully!",
                icon: "success",
                buttons: true,
                dangerMode: true,
              })
        }).catch((err)=>{
            swal({
                title: "Error",
                text: "The username is already in use. Please choose another one.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        })
    }

    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }

    changeUsernameHandler=(event)=>{
        this.setState({username: event.target.value});
    }

    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }

    changeAgeHandler=(event)=>{
        this.setState({age: event.target.value});
    }

    changeDobHandler=(event)=>{
        this.setState({dob: event.target.value});
    }

    changePhnoHandler=(event)=>{
        this.setState({phno: event.target.value});
    }

    render(){
        return(
            <>
                <LoginBar/>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <label>Name </label>
                            <input type="text" autoComplete='off' name="name" value={this.state.name} onChange={this.changeNameHandler} required />
                        </div>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="text" autoComplete='off' name="username" value={this.state.username} onChange={this.changeUsernameHandler} required />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" autoComplete='off' name="password" value={this.state.password} onChange={this.changePasswordHandler} required />
                        </div>
                        <div className="input-container">
                            <label>Email </label>
                            <input type="email" autoComplete='off' name="email" value={this.state.email} onChange={this.changeEmailHandler} required />
                        </div>
                        <div className="input-container">
                            <label>Date of Birth </label>
                            <input type="date" name="dob" value={this.state.dob} onChange={this.changeDobHandler} required />
                        </div>
                        <div className="input-container">
                            <label>Age </label>
                            <input type="number" autoComplete='off' name="age" value={this.state.age} onChange={this.changeAgeHandler} required />
                        </div>
                        <div className="input-container">
                            <label>Contact Number </label>
                            <input type="number" autoComplete='off' name="phno" value={this.state.phno} onChange={this.changePhnoHandler} required />
                        </div>
                        <div>
                        <button className='login-button' style={{marginLeft: '595px'}} onClick={this.saveUser}>
                            Register
                        </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Register;