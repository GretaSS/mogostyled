import React from 'react'
import styled from 'styled-components';
import View from '../../styled/View';

import binsta1 from '../../assets/images/binsta1.jpg';
import binsta2 from '../../assets/images/binsta2.jpg';
import binsta3 from '../../assets/images/binsta3.jpg';
import binsta4 from '../../assets/images/binsta4.jpg';
import binsta5 from '../../assets/images/binsta5.jpg';
import binsta6 from '../../assets/images/binsta6.jpg';
import binsta7 from '../../assets/images/binsta7.jpg';
import binsta8 from '../../assets/images/binsta8.jpg';
import binsta9 from '../../assets/images/binsta9.jpg';

const Link = styled.a`
    text-decoration: none;
    font-style: italic;
    font-size: 12px;
`;

const Img =styled.img`
    margin: 2px;
`;

function AbInsta(){
    return(
        <View w='276px' h='355px'>
            <View m='0 auto 34px' fontW='bold' op='0.7'>INSTAGRAM</View>
            <View>
                <Img src={binsta1}/> 
                <Img src={binsta2}/>
                <Img src={binsta3}/>
                <Img src={binsta4}/>
                <Img src={binsta5}/>
                <Img src={binsta6}/>
                <Img src={binsta7}/>
                <Img src={binsta8}/>
                <Img src={binsta9}/> 
            </View>
            <View mT='10px'><Link href='#'>View more photos</Link></View>
        </View> 
    )
}

export default AbInsta;