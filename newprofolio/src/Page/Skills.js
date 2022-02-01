import React from 'react'
import HTML from '../images/HTML.png'
import CSS from '../images/CSS.png'
import JS from '../images/JS.svg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Skills = () => {
    return (
        <div className='body'>
            <Navbar />
            <p id='title'>About Me</p>
            <div className="Skill-Holder">
                <img id="Img-css" src={CSS} alt="CSS"></img>
                <img id="Img-html" src={HTML} alt="HTML"></img>
                <img id="Img-js" src={JS} alt="JS"></img>
            </div>
            <div>
                <p id='title'>Goals</p>
                <p id="GoalText">
                    My goal is to better myself on the JavaScript becuase I've such an issue with it, I can barrely pass the class.
                    The goal I want to have for myself is to get better on JavaScript skill so I don't need help ever time I encounter a code problem.
                    I don't even have years of experience on coding and the last year was a terrible experience. I wish I can stop blaming myself because
                    it doesn't help me at all. The goal I want in the future is to understand what Cybersecurity and what place I can go to learn
                    as I wish to learn how to hack and defend from hackers. The reason why I wanted to learn cybersecurity is to be more protected on
                    any device I own and protect my family/friends from unsafe networks. The insiparision came from a game called WatchDog as I really was interested
                    that any device can be hack and use fully. Soon I realize if I was able to hack a device and use it fully, then anyone can do it, so I also want
                    to learn how to secure any device so that no one is able to get in. The world is slowly becoming a technologies as people were able to get in any device
                    it could be such a scary world were anyone can do anything with any device. The only person I really look up to is myself even though
                    that isn't possible but there are so many people I learn from their experience like my P.E. teacher Coach Norris of how he hasn't drank soda in 20 years
                    and explained on healthy diets which then tells his story which motivated me to get my body a much better position. Philosophers from Greek to United state
                    qoutes are memorable adn use on a dailty basses but the Ancient Chinese mothology is the one is see myself learnign from. In it I want to controll myelf
                    to were I can controll my emotion, my action, and my thoughts to find the good answer to problems. Sun tzu "Never under estimate your oponent", which I take it for
                    to never look down on people just by looks. The dou is were you act like water even Bruce Lee said "Be water my friend". Being water mean to be adapted to any
                    invirement you're in becuase if your always trying to be strong, you're seen as a brittle stick tough, but easily broking down. 
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Skills
