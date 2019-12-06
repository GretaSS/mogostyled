import React from "react";
import styled from "styled-components";
import View from '../../styled/View';
import Text from '../../styled/Text';
import Section from '../../Section';

import icon1 from "../../assets/images/1.png";
import icon2 from "../../assets/images/2.png";
import icon3 from "../../assets/images/3.png";
import icon4 from "../../assets/images/4.png";
import icon5 from "../../assets/images/5.png";
import icon6 from "../../assets/images/6.png";

const Hr = styled.hr`
    background-color: #e5e5e59f;
    opacity: 0.3;
    width: 100%;
    height: 0.1px;
`;
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 20px;
    z-index: 1;
`;

class WorkServices extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            servicesFirst: [
                {
                    src: icon1,
                    name: "photography",
                    lorem: "Lorem ipsum dolor sit amet consec adipisicing elit.Sint, modi eius ",
                },
                {
                    src: icon2,
                    name: "web design",
                    lorem: "Lorem ipsum dolor sit amet consecr adipisicing elit.Sint, modi eius",
                },
                {
                    src: icon3,
                    name: "creativity",
                    lorem: "Lorem ipsum dolor sit amet consecr adipisicing elit.Sint, modi eius",
                }
            ],
            servicesSecond: [
                {
                    src: icon4,
                    name: "seo",
                    lorem: "Lorem ipsum dolor sit amet consecr adipisicing elit.Sint, modi eius",
                },
                {
                    src: icon5,
                    name: "css/html",
                    lorem: "Lorem ipsum dolor sit amet consecr adipisicing elit.Sint, modi eius",
                },
                {
                    src: icon6,
                    name: "digital",
                    lorem: "Lorem ipsum dolor sit amet consecr adipisicing elit.Sint, modi eius",
                }
            ],
        }
    }

    renderServicesFirstItems = () => (
        this.state.servicesFirst.map( (item, index) => (
            <View key={index} pos='relative' pL='90px' f='1 1 0'>
                <Img src={item.src}/>
                <View tTf='uppercase' fontSize='11pt'op='0.7' mB='10px'>{item.name}</View>
                <Text op='0.3' fontSize='12px'>{item.lorem}</Text>
            </View>
        ))
    )

    renderServicesSecondItems = () => (
        this.state.servicesSecond.map( (item, index) => (
            <View key={index} pos='relative' pL='90px' f='1 1 0'>
                <Img src={item.src}/>
                <View tTf='uppercase' fontSize='11pt'op='0.7' mB='10px'>{item.name}</View>
                <Text op='0.3' fontSize='12px'>{item.lorem}</Text>
            </View>
        ))
    )

    render(){
        return(
            <View flex fD='column' m='0 auto' mB='45px' maxW='1200px' p="15px">
                <Section 
                    suptitle='We work with'
                    title='Amazing services'
                />

                <View flex fontW='bold' mT='20px' mB='20px'>
                    {this.renderServicesFirstItems()}
                </View>

                <Hr/>

                <View flex fontW='bold' mT='20px' mB='20px'>
                   {this.renderServicesSecondItems()}
                </View>
            </View>
        )
    }
    
}

export default WorkServices