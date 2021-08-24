import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 60px;
    height: 60px;
    background: yellow;
    opacity: 0.4;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;
    animation: ssqua 25s linear alternate infinite;

    @keyframes ssqua {
        to{
            transform: translate(100vw, 100vh);
        }
    }
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    background: pink;
    border-radius: 50%;
    opacity: 0.7;
    position: absolute;
    top: 200px;
    left: -100px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle {
        to{
            transform: translate(100vw, -100vh);
        }
    }
`
const Rect = styled.div`
    width: 50px;
    height: 50px;
    background: green;
    border-radius: 50%;
    opacity: 0.4;
    position: absolute;
    top: 400px;
    left: -50px;
    z-index: -1;
    animation: rect 20s linear alternate infinite;

    @keyframes rect {
        to{
            transform: translate(100vw, -50vh);
        }
    }
`

const AnimatedShapes = () => {
    return (
        <>
        <Square/>
        <Circle/>
        <Rect/>
        </>
    )
}

export default AnimatedShapes