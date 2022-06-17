//import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import ProgressService from '../services/ProgressService';
import '../css/progress.css'

class ListProgress extends Component{
    constructor(props){
        super(props)
        this.state={
            progress: []
        }
    }

    componentDidMount(){
        var p=[]
        ProgressService.getAllProgress().then((res)=>{
            for(let i=0; i<res.data.length; i++)
            {
                let n=res.data[i].username
                var ans=n.localeCompare(localStorage.getItem('Username'));
                if(ans===0)
                    p.push(res.data[i])
            }
            this.setState({progress: p});
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h2 style={{textAlign: 'center', fontSize:'30px'}}>Your progress</h2><br/>
                <div>
                    <table className='display'>
                        <thead>
                            <tr>
                                <th style={{columnWidth: '100px'}}>Date</th>
                                <th>Your day</th>
                                <th>Your moods</th>
                                <th>Number of hours of sleep</th>
                                <th>Quality of sleep</th>
                                <th>Changes in diet</th>
                                <th>Glasses of water drank</th>
                                <th style={{padding: '5px'}}>Medications</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.progress.map(
                                progress=>
                                <tr>
                                    <td>{progress.date}</td>
                                    <td>{progress.day}</td>
                                    <td>{progress.mood}</td>
                                    <td>{progress.sleep}</td>
                                    <td>{progress.quality}</td>
                                    <td>{progress.diet}</td>
                                    <td>{progress.water}</td>
                                    <td>{progress.med}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListProgress;

