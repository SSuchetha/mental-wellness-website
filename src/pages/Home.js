import React from 'react';
import NavigationBar from '../components/NavigationBar';
import one from '../components/pics/one.png';
import two from '../components/pics/two.png';
import three from '../components/pics/three.png';
import four from '../components/pics/four.png';
import five from '../components/pics/five.png';
import '../css/home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import HomeService from '../services/HomeService';

const Home = (handleLogged) => {
    const diffToast=()=>{
        HomeService.createMessage().then(res=>{
            toast(res.data.message, {position: 'top-right'})
        });
    }
    return (
        <>
            <div>
                <br />
                <br/>
                <NavigationBar isLogged={handleLogged} />
            </div>
            <div className='container2'>
                <div className='motto'>            
                    <br/>
                    <br/>
                    <p className='p1'><b>~~ Mental Health is not a destination,but a process.Its about how you drive not where you
                            are going ~~</b></p>
                    <p className='p1'>Mental health is still a very hushed topic. People feel physical health is the only
                        one that matters. But mental health is a key ingredient without which the recipe for a happy
                        life becomes useless. Here in our website, we are promoting mental wellness and aiming at helping
                        people achieve the peace of mind they deserve. </p><br/>
                    <button className='message' onClick={diffToast}>Click Me!!</button>
                </div>
            </div>
            
            <div className='wrapper' style={{ marginLeft: '10px' }}>

                <Blog img={'https://www.nami.org/NAMI/media/NAMI-Media/BlogImageArchive/2022/Panic_Blog.png'}
                    title="Unpacking My Panic Attack" 
                    href={'https://www.nami.org/Blogs/NAMI-Blog/May-2022/Unpacking-My-Panic-Attack'} />
                <Blog img={'data:image/png;base64,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'}
                    title="Depression"
                    href='https://www.beyondblue.org.au/who-does-it-affect/personal-stories/story/sarah---beyond-blue' />
                <Blog img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMzu-Xy6mWX1ojFnspsO4TQ6TxI2pzBSM7Lh5RZsMK4qVA_glkGgq6GiKNrldEyYP_jI&usqp=CAU'}
                    title="What It's Like To Have An ADHD Brain"
                    href='https://medium.com/s/greatescape/what-its-like-to-have-an-adhd-brain-52a7c5171d8f' />
                <Blog img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnTkT1InML9jdvp1YVjNfP7kANuSfOMK-ew&usqp=CAU'}
                    title="Schizophrenia - John's Story"
                    href={'https://journeymhc.org/recovery-stories/#1513002264917-a6fa82a8-447f'} />
            </div>
            <br />
            <br />
            <br/>
            <br />
            <br/>
            <p className='p1' align='center'><strong>HELPLINE NUMBERS</strong></p>
            
            <div>
                <br/>
                <marquee>
                    <br/>
                    <div className='imgwrapper'>
                        <img src={one} />
                    </div>
                    <div className='imgwrapper'>
                        <img src={two} />
                    </div>
                    <div className='imgwrapper'>
                        <img src={three} />
                    </div>
                    <div className='imgwrapper'>
                        <img src={four} />
                    </div>
                    <div className='imgwrapper'>
                        <img src={five} />
                    </div>
                </marquee>
            </div>
            <ToastContainer/>
        </>
    )
}

function Blog(props) {
    return (
        <>
            <div className='card'>
                <div className='card_body'>
                    <img src={props.img} alt='Not Found' className='card_img' style={{ width: '300px', height: '250px' }}/>
                    <h2 className='card_title'>{props.title}</h2>
                    <p className='card_description'>{props.description}</p>
                </div>
                <a className='card_btn' style={{ textDecoration: 'none', textAlign: 'center' }} href={props.href} target="_blank">View Article</a>
            </div>
        </>
    )
}
           
export default Home;