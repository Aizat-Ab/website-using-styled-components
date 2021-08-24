import React from 'react';
import styled from 'styled-components';
import how from '../img/how1.png';
import MiniCart from './MiniCart';
import play from '../img/play.png';

const Container = styled.div`
    display: flex;
    height:100%;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Right = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`
const Img = styled.img`
    display: ${(props) => props.open && 'none'};
    height: 100%;
    margin-left: -97px;
`
const Video = styled.video`
    display: ${(props) => !props.open && 'none'};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px){
        padding: 20px;
        width: 100%;
    }
`
const Title = styled.h2`
    font-size: 46px;
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const Button = styled.button`
    width: 180px;
    border: none;
    background: darkblue;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    margin-top: 50px;
    cursor: pointer;
    padding: 15px;
    display: flex;
    align-items: center;
`
const Icon = styled.img`
    width: 20px:
    margin: 10px;
    margin-right: 8px;
`
const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5)
`
const CloseButton = styled.button`
    position: absolute;
    background: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 25%;
`

const Service = () => {
    const [open, setOpen] = React.useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <Container>
            <Left>
                <Img open={open} src={how}/>
                <Video open={open} autoPlay loop controls src='https://www.youtube.com/watch?v=d_HlPboLRL8'/>
            </Left>
            <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc> We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources</Desc>
            <CardContainer>
                <MiniCart/>
                <MiniCart/>
                <MiniCart/>
            </CardContainer>
            <Button onClick={()=>setOpen(true)}>
                <Icon src={play}/> How it Works
            </Button>
            </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video open={open} autoPlay loop controls src='https://www.youtube.com/watch?v=d_HlPboLRL8'/>
                <CloseButton onClick={()=> setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service
