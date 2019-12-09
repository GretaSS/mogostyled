import React from 'react';
import styled from "styled-components";
import View from '../../styled/View';
import Section from '../Section';

import matthew from '../../assets/images/matthew.jpg';
import christopher from '../../assets/images/christopher.jpg';
import michael from '../../assets/images/michael.jpg';

import HypsterLogos from '../HypsterLogos'

const Abimg = styled(View)`
    width: 380px;
    margin-right: 35px;
    background: linear-gradient(to bottom,#f57f7f,#fce38a);
    transition: transform .2s linear;
    &:hover{
        transform: translate3d(-10px, -10px, 0);
    }
`;
const Img = styled.img`
    display: block;
    &:hover{
        opacity: .1;
    }
`;

class MeetOurTeam extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            intro: [
                {
                    src: matthew,
                    name: 'MATTEW DIX',
                    prof: 'Graphic Design',
                },
                {
                    src: christopher,
                    name: 'CHRISTOPHER CAMPBELL',
                    prof: 'Branding UX Design',
                },
                {
                    src: michael,
                    name: 'MICHAEL FERTIC',
                    prof: 'Developer',
                },
            ]
        }
    }

    renderTeamItems = () => (
        this.state.intro.map( (item, index) => (
            <View key={index}>
                <View bgColor='#95e1d3' mR='53px' w='380px'>
                    <Abimg><Img src={item.src} alt='img' /></Abimg>
                </View>

                <View flex fD='column' justC='space-around' alignI='center' mT='20px' mR='53px' fontSize='18px' fontF="'Montserrat'">
                    {item.name}
                    <View op='0.5' lH='2' fontSize='15px' fontStyle='italic'>{item.prof}</View>
                </View>
            </View>
        ) )
    )


    render(){
        return(
            <View>
                <Section 
                    suptitle='Whu we are' 
                    title='Meet our team' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
                <View flex justC='space-between' alignI='center' m='0 auto' maxW='1200px'>
                    {this.renderTeamItems()}
                </View>
                <HypsterLogos/>
            </View>
        )
    }
}

export default MeetOurTeam;