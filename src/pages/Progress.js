import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../css/progress.css';
import ProgressService from '../services/ProgressService';
import swal from 'sweetalert';
import ListProgress from '../components/ListProgress';

class Progress extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            date: '',
            day: '',
            mood: '',
            sleep: '',
            quality: '',
            diet: '',
            water: '',
            med: ''
        }

        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changeDayHandler=this.changeDayHandler.bind(this);
        this.changeMoodHandler=this.changeMoodHandler.bind(this);
        this.changeSleepHandler=this.changeSleepHandler.bind(this);
        this.changeQualityHandler=this.changeQualityHandler.bind(this);
        this.changeDietHandler=this.changeDietHandler.bind(this);
        this.changeWaterHandler=this.changeWaterHandler.bind(this);
        this.changeMedHandler=this.changeMedHandler.bind(this);
        this.saveSubmit=this.saveSubmit.bind(this);
    }

    saveSubmit=(e)=>{
        e.preventDefault();
        let progress={
            username: localStorage.getItem('Username'), date: this.state.date, day: this.state.day,
            mood: this.state.mood, sleep: this.state.sleep, quality: this.state.quality, diet: this.state.diet,
            water: this.state.water, med: this.state.med
        };
        ProgressService.addProgress(progress).then((res)=>{
            swal("Success", "Progress Saved", "success")
        })
    }

    changeDateHandler=(event)=>{
        this.setState({date: event.target.value})
    }

    changeDayHandler=(event)=>{
        this.setState({day: event.target.value})
    }

    changeMoodHandler=(event)=>{
        this.setState({mood: event.target.value})
    }

    changeQualityHandler=(event)=>{
        this.setState({quality: event.target.value})
    }

    changeDietHandler=(event)=>{
        this.setState({diet: event.target.value})
    }

    changeWaterHandler=(event)=>{
        this.setState({water: event.target.value})
    }

    changeMedHandler=(event)=>{
        this.setState({med: event.target.value})
    }

    changeSleepHandler=(event)=>{
        this.setState({sleep: event.target.value})
    }

    render(){
        return(
            <>
            <br/><br/>
            <NavigationBar /><br/><br/>
            <ListProgress /><br/><br/>
            <div className="form">
                <p style={{ float: 'left', marginLeft: '550px', fontSize:'30px' }}><b>Track your progress</b></p><br />
                <div className="ques">
                    <form>
                        <div>
                            <label>1. Date   </label>
                            <input type='date' name='date' value={this.state.date} onChange={this.changeDateHandler} />
                        </div><br/>
                        <div>
                            <label>2. How was your day?</label><br /><br />
                            <input type='radio' name={'day'} value={'Good'} onChange={this.changeDayHandler} className="radio" />Good<br />
                            <input type='radio' name={'day'} value={'Neutral'} onChange={this.changeDayHandler} className="radio"/>Neutral<br />
                            <input type='radio' name={'day'} value={'Bad'} onChange={this.changeDayHandler} className="radio"/>Bad<br />
                        </div><br />
                        <div>
                            <label>
                                3. Your moods today<br/>
                                (Eg: Emotional, Lonely, Cranky, Frustrated, Depressed, Confident, Hopeful, Excited, Exhausted, Sad, Happy, Stressed, Relaxed)
                            </label><br /><br/>
                            <textarea cols={50} rows={7} name='mood' value={this.state.mood} onChange={this.changeMoodHandler}></textarea>
                        </div><br/>
                        <div>
                            <label>4. Number of hours slept   </label>
                            <input type='number' autoComplete='off' name='sleep' value={this.state.value} onChange={this.changeSleepHandler} />
                        </div>
                        <br />
                        <div>
                            <label>5. Quality of sleep</label><br/><br/>
                            <input type={'radio'} className='radio' name='quality' value={'Very Good'} onChange={this.changeQualityHandler} />Very Good<br/>
                            <input type={'radio'} className='radio' name='quality' value={'Good'} onChange={this.changeQualityHandler} />Good<br/>
                            <input type={'radio'} className='radio' name='quality' value={'Neutral'} onChange={this.changeQualityHandler} />Neutral<br/>
                            <input type={'radio'} className='radio' name='quality' value={'Bad'} onChange={this.changeQualityHandler} />Bad<br/>
                            <input type={'radio'} className='radio' name='quality' value={'Very Bad'} onChange={this.changeQualityHandler} />Very Bad<br/>
                        </div><br/>
                        <div>
                            <label>6. Any changes in diet?</label><br/><br/>
                            <input type={'radio'} className='radio' name='diet' value={'Eat too much'} onChange={this.changeDietHandler} />Eat too much<br/>
                            <input type={'radio'} className='radio' name='diet' value={"Don't feel hungry"} onChange={this.changeDietHandler} />Don't feel hungry<br/> 
                            <input type={'radio'} className='radio' name='diet' value={'Not much change'} onChange={this.changeDietHandler} />Not much change<br/>
                            <input type={'radio'} className='radio' name='diet' value={'No change'} onChange={this.changeDietHandler} />No change<br/>
                        </div>
                        <div><br/>
                            <label>7. How many glasses of water did you drink?</label>
                            <input type='number' autoComplete='off' name='water' value={this.state.water} onChange={this.changeWaterHandler} />
                        </div><br />
                        <div>
                            <label>8. Are you on any medication? If yes please specify  </label>
                            <input type={'text'} autoComplete='off' name='med' value={this.state.med} onChange={this.changeMedHandler}/>
                        </div><br />
                        <button onClick={this.saveSubmit} className="btn">
                            SUBMIT
                        </button>
                        </form>
                </div>
            </div>
            <br/><br/><br/>
        </>
        )
    }
}

export default Progress;