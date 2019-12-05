import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';

import img1 from "../../assets/images/Untitled-1.jpg";
import img2 from "../../assets/images/Untitled-2.jpg";
import img3 from "../../assets/images/Untitled-3.jpg";

const Img = styled.img`
    display: block;
    &:hover{
        opacity: .1;
    }
`;

const Abimg = styled(View)`
    width: 380px;
    margin: 0 35px 0 0;
    background: linear-gradient(to bottom,#f57f7f,#fce38a);
    transition: transform .2s linear;
    &:hover{
        transform: translate3d(-10px, -10px, 0);
    }
`;

function ImagesInner(){
    return(
        <View flex justC='space-between'>
            <View bgColor='#95e1d3' mR='53px' w='380px'>
                <Abimg>
                    <Img src={img1}/>
                </Abimg>
            </View>
            <View bgColor='#95e1d3' mR='53px' w='380px'>
                <Abimg>
                    <Img src={img2}/>
                </Abimg>
            </View>
            <View bgColor='#95e1d3' mR='53px' w='380px'>
                <Abimg>
                    <Img src={img3}/>
                </Abimg>
            </View>
        </View>
    )
}
export default ImagesInner