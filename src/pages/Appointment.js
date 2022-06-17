import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../css/login.css';
import '../css/appointment.css';
import { Form } from 'react-bootstrap';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import AppointmentService from '../services/AppointmentService';
import UserCard from './UserCard';
import swal from 'sweetalert';

class Appointment extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            phno: '',
            hospital: '',
            drname: '',
            date: '',
            slot: ''
        }

        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeNumberHandler=this.changeNumberHandler.bind(this);
        this.changeHospitalHandler=this.changeHospitalHandler.bind(this);
        this.changeDrNameHandler=this.changeDrNameHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changeSlotHandler=this.changeSlotHandler.bind(this);
        this.saveAppointment=this.saveAppointment.bind(this);

    }

    saveAppointment=(e)=>{
        e.preventDefault();
        let appointment={
            name: this.state.name, email: this.state.email, phno: this.state.phno, 
            hospital: this.state.hospital, drname: this.state.drname, date: this.state.date, 
            slot: this.state.slot
        };
        AppointmentService.createAppointment(appointment).then((res)=>{
            swal("Success", "Appointment Booked", "success");
        }).catch((err)=>{
            swal({
                title: "Error",
                text: "Please choose another date",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        })
    }

    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }

    changeNumberHandler=(event)=>{
        this.setState({phno: event.target.value});
    }

    changeHospitalHandler=(event)=>{
        this.setState({hospital: event.target.value});
    }

    changeDrNameHandler=(event)=>{
        this.setState({drname: event.target.value});
    }

    changeDateHandler=(event)=>{
        this.setState({date: event.target.value});
    }

    changeSlotHandler=(event)=>{
        this.setState({slot: event.target.value});
    }

    render(){
        return(
            <>
                <br/><br/>
                <NavigationBar/>
                <br/>
                <div className='imp' style={{fontSize: '25px', width: '1000px', marginLeft: '185px', display: 'inline-flex', height: '240px'}}>
                    Why is consulting a mental health professional is the best thing to do?
                    <br/><br/>
                    Mental Health Disorders are quite naturally taxing both on the individual and the caregivers.
                    Unlike physical health issues, mental health disorders may not always have obvious tell-tale 
                    signs. Understanding these signs, though often buried deep within is crucial for effective 
                    recovery.
                    <div className='tick'>
                        <TiTick size={198} color={'white'}/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div style={{fontSize: '35px', fontWeight: 'bold', marginLeft: '250px'}}>
                    Seeing a therapist for the first time?
                    Here's a checklist.
                </div>
                <br/><br/>
                <div style={{display: 'inline-flex'}}>
                    <div className='box' style={{marginLeft: '130px'}}>
                        <RiNumber1 size={70} color={'white'}/>
                        <br/>
                        <strong>Are you carrying your medical records?</strong><br/><br/>
                        Carry medical history that might be relevant. Previous consultation records (if any), 
                        Prescriptions, lab reports, etc. All the information will help us build a more accurate
                        picture.
                    </div>
                    <div className='box'>
                        <RiNumber2 size={70} color={'white'}/>
                        <br/>
                        <strong>Is the accomplice a primary care-giver?</strong><br/><br/>
                        It's preferable that close family members / guardians who knows the person and the 
                        condition accompany the individual for the consultation for we can get reliable 
                        information and thus arrive at an accurate diagnosis.
                    </div>
                    <div className='box'>
                        <RiNumber3 size={70} color={'white'}/>
                        <br/>
                        <strong>Have you observed the individual enough?</strong><br/><br/>
                        Try to thoroughly observe the individual and the symptoms before the consultation for 
                        this helps you effectively answer the psychiatrists' questions.
                    </div>
                    <div className='box'>
                        <RiNumber4 size={70} color={'white'}/>
                        <br/>
                        <strong>Have you made notes of your observations?</strong><br/><br/>
                        Making notes of your observations and documenting the signs and symptoms can go a long 
                        way in ensuring an accurate diagnosis. And remember, simplicity is the key. Try and avoid
                        jargons while describing the symptoms, it's best to explain it in laymen's words.
                    </div>
                </div>
                <br/><br/><br/>
                <div style={{fontSize: '35px', fontWeight: 'bold', marginLeft: '300px'}}>
                    Still have a doubt?
                    Book an appointment with Dr. A
                </div><br/><br/>
                <div className='App'>
                    <UserCard/>
                </div>
                <div style={{marginLeft: '570px', fontSize: '30px', marginTop: '220px', fontWeight: 'bold'}}>
                    Book an Appointment
                </div>
                <div className="form" style={{marginLeft: '10px'}}>
                    <form>
                        <div className="input-container">
                            <label>Name</label>
                            <input type="text" autoComplete='off' required name='name' value={this.state.name} onChange={this.changeNameHandler}></input>
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email" autoComplete='off' required name='email' value={this.state.email} onChange={this.changeEmailHandler}></input>
                        </div>
                        <div className="input-container">
                            <label>Phone Number</label>
                            <input type="number" autoComplete='off' required name='phno' value={this.state.number} onChange={this.changeNumberHandler}></input>
                        </div>
                        <div className="input-container">
                            <label>Hospital</label>
                            <Form.Select className='select' required aria-label="Default select example" name='hospital' value={this.state.hospital} onChange={this.changeHospitalHandler}>
                            <option>Select</option>
                            <option value="1">First Hospital</option>
                            </Form.Select>
                        </div>
                        <div className="input-container">
                            <label>Doctor Name</label>
                            <Form.Select className='select' required aria-label="Default select example" name='drname' value={this.state.drname} onChange={this.changeDrNameHandler}>
                            <option>Select</option>
                            <option value="Dr. A">Dr. A</option>
                            </Form.Select>
                        </div>
                        <div className="input-container">
                            <label>Date</label>
                            <input type={'Date'} name='date' required value={this.state.date} onChange={this.changeDateHandler}></input>
                        </div>
                        <div className="input-container">
                            <label>Slot</label>
                            <Form.Select className='select' required aria-label="Default select example" name='slot' value={this.state.slot} onChange={this.changeSlotHandler}>
                            <option>Select</option>
                            <option value="10:30 am - 11:30 am">10:30 am - 11:30 am</option>
                            <option value="11:30 am - 12:30 pm">11:30 am - 12:30 pm</option>
                            <option value="12:30 pm - 13:30 pm">12:30 pm - 13:30 pm</option>
                            <option value="18:00 pm - 19:00 pm">18:00 pm - 19:00 pm</option>
                            <option value="19:00 pm - 20:00 pm">19:00 pm - 20:00 pm</option>
                            <option value="20:00 pm - 21:00 pm">20:00 pm - 21:00 pm</option>
                            </Form.Select>
                        </div>
                        <div>
                            <button className='login-button' style={{marginLeft: '580px'}} onClick={this.saveAppointment}>
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Appointment;