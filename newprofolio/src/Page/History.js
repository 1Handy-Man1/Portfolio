import React from 'react'
import Library from '../images/Glendale_FH.jpg'
import Campus from '../images/campus-northeast.jpg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const History = () => {
    return (
        <div className='body'>
            <Navbar />
            <p id='title'>History </p>
            <div className="Library-history">
                <p id="History-text">
                    I used to volunteer in Glendale FootHills Library since I was a young teen around like 7 - 13 years old.
                    The way I got in the volunteering because of my mom forcing me to be in has it would be a good look for me when growing older
                    inside my resume. I didn't understand but I just went along and learned some skills because of that. 
                    The first type of work was to read books to really little kids that are around 1 - 2 years old. At the time
                    I had a friend who also was working with me and my little brother who was there for fun, there was a group of 6-7 plus me of teens
                    volunteering for little kids. We had to clean the toys, read books to little children and help shelf the books. At the time for me I had to
                    clean the floors as in any legos on ground I must put it back in the box, any building blocks put them right back to the container. I mostly
                    shelf movies & video games and not books but any book I find I would return them to book lost for the people to shelf the book. The time I actually
                    shelf books is when I was a bit older shelving on the adults & teens books. In the summer I also applied the Summer Reading Program where I sit in the
                    table waiting for people to read and when they come to me I learn some communications skills and ask what progress they had, who is it, and what would
                    like for a prize. The library is an amazing place to go and an enjoyable place to hangout.
                </p>
                <img id="library-img" src={Library} alt="library"></img>
            </div>
            <div className="MEC-history">
                <img id="library-img" src={Campus} alt="Northeast west-MEC campus"></img>
                <p id="History-text">
                    When I first went to west-MEC it was last year in 2020 as I was first introduce to HTML, CSS, and most hated of all JavaScript. The skill level
                    I had in the beginning was lower than basic as I never made my own website. The only experience I had with code was highschool class that was mostly in moving
                    a character around to make shapes. So when I started we were introduce to binary and hex color with lots of vocabs to learn, which was an annoying time. 
                    At the time I was never really was good at it and my mistake was to feel terrible about it. At the first year I was doing well until I had no experince on
                    JavaScript and so I started to dought myself of capibility to make a code work and most of the work was done in JavaScript which I was not fond with. I was 
                    so unhappy at the time to where I did nothing for myself as I just look at the screen not getting any help. I was emotionaly unstable at the time and was fully
                    angry of my own ability even though I had no experience at all.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default History
