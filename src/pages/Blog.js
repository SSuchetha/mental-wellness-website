import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../css/blog.css';
import '../css/nav.css';
import '../css/home.css';
import DonutChart from 'react-donut-chart';

function blogapp(){
    return(
        <>
        <br/>
        <br/>
        <NavigationBar />
        <p style={{fontSize: '20px'}}><strong>Here is a chart for your balanced diet</strong></p><br/>
        <div style={{float: 'left'}}>
            <DonutChart
            className='chart'
            width={500}
            height={330}
            innerRadius={0.8}
            selectedOffset={0}
            outerRadius={0.7}
            colors={["#009933", "#800000", "#cc0088", "#000099"]}
            data={[
                { label: 'Fruits & Veggies', value: 40, },
                { label: 'Carbohydrates', value: 25, },
                { label: 'Protien', value: 25, },
                { label: 'Fats', value: 10, },
            ]}
            />
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div>
            <p style={{fontSize: '20px'}}><strong>How your everyday routine should look like</strong></p><br/>
            <DonutChart
            className='chart'
            width={500}
            height={330}
            innerRadius={0.8}
            selectedOffset={0}
            outerRadius={0.7}
            colors={["#cc0088", "#cc0066", "#009933", "#000099", "#ffff00", "#800000", "#ff6666"]}
            data={[
                { label: 'sleep - 7 hours', value: 29.1, },
                { label: 'work - 9 hours', value: 37.5, },
                { label: 'exercise - 1 hour', value: 4.1, },
                { label: 'me time - 1 hour', value: 4.1, },
                { label: 'meditation - 30 mins', value: 2.08, },
                { label: 'hobbies - 1 hour', value: 4.1, },
                { label: 'other work - 4.5 hours', value: 14.82 }
            ]}
            />
            <p style={{fontSize: '20px'}}><strong>This is our recommendation.<br/> Our advise : Do not compromise on sleep!!! It's super important</strong></p>
            </div>
        <br/><br/>
        <strong><p style={{float: 'center', fontSize: '20px'}}>Try this routine if you want to</p></strong><br/><br/>
        <div className='routine' style={{display: 'flex'}}>
            <div className='confidence' style={{backgroundColor: '#ff8566'}}>
                <strong>Build confidence</strong><br/><br/>
                <ul>
                    <li>Make the bed</li>
                    <li>Wear something you love</li>
                    <li>Recite self-affirmations</li>
                </ul>
            </div>
            <div className='connected' style={{backgroundColor: '#ffffb3'}}>
                <strong>Feel Connected</strong><br/><br/>
                <ul>
                    <li>Meditate</li>
                    <li>Call your loved one</li>
                    <li>Journal your thoughts</li>
                </ul>
            </div>
            <div className='focused' style={{backgroundColor: '#99ffbb'}}>
                <strong>Stay Focused</strong><br/><br/>
                <ul>
                    <li>Drink water</li>
                    <li>Write your to-do list</li>
                    <li>No screens for 2 hours</li>
                </ul>
            </div>
            <div className='sharpen' style={{backgroundColor: '#b3b3ff'}}>
                <strong>Sharpen your mind</strong><br/><br/>
                <ul>
                    <li>Brain dump</li>
                    <li>Read a chapter</li>
                    <li>Take a walk</li>
                </ul>
            </div>
            <div className='healthy' style={{backgroundColor: '#ffcc99'}} >
                <strong>Be healthier</strong><br/><br/>
                <ul>
                    <li>Stretch</li>
                    <li>Get some sun</li>
                    <li>Move your body</li>
                </ul>
            </div>
            <div className='break' style={{backgroundColor: '#d98c8c'}}>
                <strong>Take a break</strong><br/><br/>
                <ul>
                    <li>Spend time outside</li>
                    <li>Listen to music</li>
                    <li>Drink coffee or tea</li>
                </ul>
            </div>
        </div><br/><br/>
        <p style={{fontSize: '25px'}}><strong>Above all don't forget to love yourself</strong></p><br/><br/><br/>
        <p style={{fontSize: '20px'}}><strong>Here are some blogs for you to go through</strong></p>
        <div className='wrapper' style={{marginLeft: '20px'}}>
            <Blog img={'https://www.nami.org/NAMI/media/NAMI-Media/BlogImageArchive/2021/warning-signs-blog_1.jpg'}
             title="Early Warning Signs" description="Early warning signs are any thoughts, feelings, or behaviors that impair day-to-day functioning such as feeling excessively sad or low and they may indicate you need help."
             href={'https://www.nami.org/Blogs/NAMI-Blog/May-2022/Understanding-The-Early-Warning-Signs-of-Mental-Illness'}/>
             <Blog img={'https://www.rifemagazine.co.uk/wp-content/uploads/2015/11/10753.jpg'}
             title="It's Not A Joke" description="Popular comedy sets, TV shows and social media discourses are rife with jokes about “looney bins,” “straitjackets” and “crazy people” hearing voices. These harmful depictions allow stigma to proliferate."
             href={'https://www.nami.org/Blogs/NAMI-Blog/April-2022/Mental-Illness-Is-Not-a-Joke-Fighting-Stigma-in-Pop-Culture'}/>
            <Blog img={'https://newsroom.uw.edu/sites/default/files/suicide-nowmattersnow-whiteside.jpg'} 
             title="The convo we must have" description="Suicide is the second leading cause of death among 10 to 19 year olds. It can be difficult to strike a conversation about it but having it can save the life of a person " 
             href='https://www.nationwidechildrens.org/family-resources-education/700childrens/2018/08/suicide-conversation-with-kids'/>
            <Blog img={'https://www.planstreetinc.com/wp-content/uploads/2021/11/mental-health-reasons.jpg'} 
             title="Y is it Important" description="There's a big misconception that the only people who have mental health are people who experience mental illness. But spreading mental health awareness is important because we ALL have mental health." 
             href='https://mybrainsnotbroken.com/2022/05/05/why-mental-health-awareness-is-important/#more-5746'/>
            <Blog img={'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/check-list-437x230.jpg'} 
             title="How to be productive" description="Keeping productive and motivated during depression is a tall task. Depression wants to suck all of the productivity and motivation out of you to the point where you become nothing but a lump on your couch." 
             href='https://natashatracy.com/bipolar-disorder/depression-bipolar-disorder/how-to-productive-during-depression-lack-of-motivation'/>
            <Blog img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHw_wExy7HsOSZZ_WMHPQNc1pwFLkO6GZ7A&usqp=CAU'} 
             title="Living With It" description="Telling someone how we feel can be daunting. Getting to a place where we feel able to speak to someone can take an awful lot of courage. It's important that when we share, we're believed.             ." 
             href='https://www.blurtitout.org/2022/04/21/mental-health-when-people-tell-you-how-they-feel-believe-them/'/> 
            <Blog img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYwX0cunmtAxfmaXyuUhWwr-KZeUJWWXY8Fvo2Oc747CP8UwOLETOP8EgEtIEcSmj0Hk&usqp=CAU'} 
             title="Pillars of Self care" description="Self-care is not synonymous with self-indulgence or being selfish. It means taking care of yourself so that you can be healthy, do your job, help and care for others, and do all the things you need to and want to accomplish." 
             href='https://theblissfulmind.com/pillars-of-self-care/'/>
             <Blog img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjwtGqmVYPNjvk3CzKM1IDNut7bHYaZyBGQ&usqp=CAU'}
                    title="Yoga for Anxiety and Depression" description=" Yoga has been shown to do amazing things for people living with anxiety, as well as depression.

There are a number of particular poses that can be good for anxious feelings."
                    href='https://www.thegoodbody.com/yoga-poses-for-anxiety-and-depression/' />
        </div>
        <br/>
        <br/>
        <br/>
        </>
    )
}

function Blog(props) {
    return(
        <>
        <div className='card'>
            <div className='card_body'>
                <img src={props.img} className='card_img' style={{width: '300px', height: '150px'}} alt='Not Found'/>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_description'>{props.description}</p>
            </div>
            <a className='card_btn' rel='noreferrer' style={{textDecoration: 'none', textAlign: 'center'}} href={props.href} target="_blank">View Article</a>
        </div>
    </>
    )
}

export default blogapp;

/*

            <p>Chart for a balanced diet to keep your body and mind healthy</p><br/><br/>

*/