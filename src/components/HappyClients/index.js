import React from "react";
import styled from "styled-components";
import View from '../../styled/View';

import peoplesay from '../../assets/images/peoplesay.jpg'
import matthew from '../../assets/images/matthew.png';
import nick from '../../assets/images/nick.png';
import jaelynn from '../../assets/images/jaelynn.png';
import mike from '../../assets/images/mike.png';
import Section from "../../Section";

const Proff = styled(View)`
    &:after {
        content: "";
        display: block;
        width: 60px;
        height: 3px;
        background-color: #f38181;
        opacity: 1;
    }
`;

const Pic = styled.img`
    top: 0;
    left: -35px;
    z-index: 1;
`;

class HappyClients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clientsFirst: [
                {
                    src: matthew,
                    name: "MATTHEW DIX",
                    proff: "Graphic Design",
                    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                },
                {
                    src: nick,
                    name: "NICK KARVOUNIS",
                    proff: "Graphic Design",
                    lorem: "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
                },
            ],
            clientsSecond: [
                {
                    src: jaelynn,
                    name: "JAELYNN CASTILLO",
                    proff: "Graphic Design",
                    lorem: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                },
                {
                    src: mike,
                    name: "MIKE PETRUCCI",
                    proff: "Graphic Design",
                    lorem: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
                },
            ],
        }
    }

    renderClientsFirstItems = () => (
        this.state.clientsFirst.map( (item, index) => (
            <View key={index} flex m='30px' mR='0' pL='90px' w="800px">
                <Pic src={item.src}/>
                <View mL='15px'>
                    <View mB='10px' fontF="'Montserrat'" fontW='600' op='0.7'>{item.name}</View>
                    <Proff op='0.7' fontStyle='italic'>{item.proff}</Proff>
                    <View op='0.5' fontSize='17px' lH='1.5'>{item.lorem}</View>
                </View>
            </View>
        ))
    )

    renderClientsSecondItems = () => (
        this.state.clientsSecond.map( (item, index) => (
            <View key={index} flex m='30px' mR='0' pL='90px' w="800px">
                <Pic src={item.src}/>
                <View mL='15px'>
                    <View mB='10px' fontF="'Montserrat'" fontW='600' op='0.7'>{item.name}</View>
                    <Proff op='0.7' fontStyle='italic'>{item.proff}</Proff>
                    <View op='0.5' fontSize='17px' lH='1.5'>{item.lorem}</View>
                </View>
            </View>
        ))
    )

    render(){
        return(
            <View bgImg={peoplesay} flex fD='column' w='100%' h='100vh' bgSize='cover'>
                <Section suptitle="Happy Clients" title="What People Say"/>
                <View flex justC='space-between' alignI='center' m='auto 90px' mT='0'>
                    {this.renderClientsFirstItems()}
                </View>

                <View flex justC='space-between' alignI='center' m='auto 90px' mT='0'>
                    {this.renderClientsSecondItems()}
                </View>
            </View>
        )
    }
}
export default HappyClients;