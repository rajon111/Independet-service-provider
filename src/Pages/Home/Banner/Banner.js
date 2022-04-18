import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>MAKE ENJOYABLE YOUR LIFE WITH CREATIVE THOUGHTS</h3>
                <p>Questions are asked only to the ones who can answer it</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Life is Colurfull! Make More memory ? Stay With Us</h3>
                <p>The more successful the villain, the more successful the picure.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Every Movie Starts With An Idea One Person Refuses TO IGNORE</h3>
                <p>
                   No Rain,No flowers
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;