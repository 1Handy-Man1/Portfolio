import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';

const Gallery = () => {
    return (
        <div className='body'>
            <Navbar />
            <p id='title'>Gallery</p>
            <Carousel />
            <Footer />
        </div>
    )
}

export default Gallery