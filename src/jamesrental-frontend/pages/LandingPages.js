import React from "react";
import Slider from 'react-slick';
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //backgroud-size: cover;
    border: 2px solid black;
`;

const TestBox01 = styled.div`
    border: 3px solid black;
    display: flex;
`

const TestBox02 = styled.div`
    border: 3px solid red;
    display: flex;
`
const TestBox03 = styled.div`
    border: 3px solid blue;
    display: flex;
`

const Slide = ({background}) => (
    <Container style={({backgroundImage: `url(${background})`})}>

    </Container>
);

const LandingPage = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow : 1,
        slidesToScroll :1,
        swipeToSlide: true,
        draggable: true,
    };

    return (
        <Slider{...settings}>
            <Slide>
                <TestBox01/>
            </Slide>
            <Slide>
                <TestBox02/>
            </Slide>
            <Slide>
                <TestBox03/>
            </Slide>
        </Slider>
    )
};


export default LandingPage;