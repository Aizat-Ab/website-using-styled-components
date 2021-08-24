import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    height: 100%;
    justify-content: center;
    aling-items: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`

const Price = () => {
    return (
        <Container>
            <PriceCard price='10' type='Basic'/>
            <PriceCard price='20' type='Premium'/>
            <PriceCard price='30' type='Advanced'/>
        </Container>
    )
}

export default Price
