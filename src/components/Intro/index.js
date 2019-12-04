import React from 'react'
import MoGo from '../../assets/images/MoGo.jpg';
import styled from 'styled-components';
import View from '../../styled/View';
import Text from '../../styled/Text';

const H = styled.h1`
    font-family: 'Arial';
    text-transform: uppercase;
    font-size: 160px;
    margin: 60px 0;
    font-weight: 700;
    line-height: 1;
    &:after{
        content: "";
        display: block;
        width: 60px;
        height: 2.5px;
        margin: 50px auto;
        background-color: white;
    }
`;

const Btn= styled.a`
    text-decoration: none;
    color: white;
    border: solid #fff;
    font-size: 14px;
    padding: 7.5px 18px;
    font-family: 'Montserrat Bold', sans-serif;
    &:hover{
        background-color: white;
        color: #000;
    }
`;

class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [
                {
                    span: '01',
                    text: 'INTRO',
                },
                {
                    span: '02',
                    text: 'WORK',
                },
                {
                    span: '03',
                    text: 'ABOUT',
                },
                {
                    span: '04',
                    text: 'CONTACTS',
                },
            ]
        }
    }
    renderSliderItem = () => (
        this.state.item.map( (p,index) => (
            <View key={index} flex fontF="'Arial'" fontSize='18px' c='white' w='24%' p='20px 0' bT='2px solid #fff' alignI='center'> 
                <Text fontF="'Montserrat Bold'" fontW='800' fontSize='24px'>{p.span}</Text> 
                {p.text}
            </View>
        ))
    )
    render(){
       return(
        <View bgImg={MoGo} flex bgSize='cover' w='100%' h='100vh'>
            <View flex justC='space-between' m='0 auto' maxW='1200px' p='15px' alignI='center'>
                <View w='100%' maxW='880px' m='0 150px' c='white' tAlign='center' pT='150px'>
                    <Text fontF="'Kaushan Script'" fontSize='50px' lh='0.5'>Creative Template</Text>
                    <H>Welcome to MoGo</H>
                    <Btn href="#">LEARN MORE</Btn>

                    <View flex justC='space-between' mT='85px' w='100%'>
                        {this.renderSliderItem()}
                    </View>
                </View>
            </View> 
        </View>
        ) 
    }
}

export default Intro;