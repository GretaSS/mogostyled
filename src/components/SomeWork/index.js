import React from 'react';
import styled from "styled-components";
import View from '../../styled/View';

import work1 from '../../assets/images/work-1.jpg';
import work2 from '../../assets/images/work-2.jpg';
import work3 from '../../assets/images/work-3.jpg';
import work4 from '../../assets/images/work-4.jpg';
import work5 from '../../assets/images/work-5.jpg';
import work6 from '../../assets/images/work-6.jpg';
import work7 from '../../assets/images/work-7.jpg';
import Section from '../Section';

const Picdiv = styled.div`
    width: 480px;
    height: 390px;
    background: linear-gradient(to bottom,#f57f7f,#fce38a);
    transition: transform .2s linear; 
    &:hover{
        transform: translate3d(-10px, -10px, 0) ;
    }
`;

const Piclong = styled.div`
    width: 480px;
    height: 780px;
    background: linear-gradient(to bottom,#f57f7f,#fce38a);
    transition: transform .2s linear;
    &:hover{
        transform: translate3d(-10px, -10px, 0) ;
    }
`;

const Imgop = styled.img`
    &:hover{
        opacity: .1;
    }
`;

function SomeWork(){
    return(
        <View mT='100px'>
            <Section 
                suptitle='What we do' 
                title='Some of our work' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

            <View flex h='780px' w='100%' fW='wrap' fD='column' overflow='hidden'bgColor='#95e1d3'>
                <Picdiv><Imgop src={work1} alt='work' /></Picdiv>
                <Picdiv><Imgop src={work3} alt='work' /></Picdiv>
                <Picdiv><Imgop src={work2} alt='work' /></Picdiv>
                <Picdiv><Imgop src={work4} alt='work' /></Picdiv>
                <Piclong><Imgop src={work5} alt='work' /></Piclong>
                <Picdiv><Imgop src={work6} alt='work' /></Picdiv>
                <Picdiv><Imgop src={work7} alt='work' /></Picdiv>
            </View>
        </View>
    )
}

export default SomeWork;