import React from "react";
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Appointment from "./pages/Appointment";
import Progress from "./pages/Progress";
import { Route , Routes} from 'react-router-dom';
import './css/nav.css';
import './css/blog.css';

class App extends React.Component{
  state={
    isLog:false
  }
  handleLogin=(isLog)=>this.setState({isLog})
  render(){
    const {isLog}=this.state;
  return(
    <div>
      <Routes>
        <Route path='/' element={!isLog ?<Login isLogin={this.handleLogin}/>: <Home handleLogged={this.handleLogin}/> }/>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/progress' element={<Progress />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  )
  }
}

export default App;