import React from 'react';
import '../style/main.css';
import ME from '../images/SelfyOfMe.jpeg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <div className='body'>
            <Navbar />
            <p id='title'>About Me</p>
            <div className="HolderAbout">
                <div className="InfoHolder">
                    <p id="textAbout">
                        I'm Hanad, I'm 17 and the things I like are a wide spectrum. Meaning I like a lot from playing sports, to shows/movie, interest, hobbies, etc. 
                        For sports: I like Soccer, Basketball, Baseball, Football, Volleyball, etc. Soccer is my favorite sport to play as I first started playing Soccer
                        when I was 2 years old. I also was born in Africa, Djibouti for only 5 years then move to America, but My youngest cousin taught me soccer and I was
                        enjoying it even now. I have been in many soccer teams, but in highschool, I can only be in the JV soccer team for 2 years until I went to West MEC for
                        the other 2 years in my highschool life. Basketball came in because of boredom and so I was getting good on it. The times I have been in a team was in
                        7th grade, in middle school at 8th grade we had practices sections for rosters of "away team" which were good players and I was in that rosters. The rest
                        was for "home team" which everyone was on. After that I haven't been in any basketball team. Baseball came when soccer went away and try finding another
                        sport. Only in elementary and highschool I've been in a team, which in highschool was only in freshman team. I wasn't good at it but my team mates was very
                        encouraging me to push myself. Both Football and Volleyball just came for fun and not ever been in a school team.
                    </p>
                    <img id="actaulMe" src={ME} alt="Of me"></img>
                </div>
                <p id="textAbout2">
                    My hobbies are finding something to get busy so I don't get easily bored. Most of my life experience is working in volunteering and sports. I enjoyed playing sports
                    most favorite one is soccer which I haven't played in 2 years. When I'm not busy with work/sports I love to play video games. Most are first-person shooters like Cod
                    and mostly Cod as I'm a fan of the game, having the best Cod game first publish COD 4 MW and the first to be remaster with it being actually good. The most amazing game I've
                    played in my ps3/ps4 are Cod BO 2 and Titanfall 2 which I haven't played in years because of hackers. My future career is to learn cybersecurity as I want to protect not just
                    networks, data system, but protect people info like social security and bank account.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About
