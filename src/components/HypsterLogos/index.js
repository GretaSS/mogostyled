import React from 'react';
import styled from "styled-components";
import View from '../../styled/View';

import teamlogo1 from '../../assets/images/teamlogo1.png';
import teamlogo2 from '../../assets/images/teamlogo2.png';
import teamlogo3 from '../../assets/images/teamlogo3.png';
import teamlogo4 from '../../assets/images/teamlogo4.png';
import teamlogo5 from '../../assets/images/teamlogo5.png';
import teamlogo6 from '../../assets/images/teamlogo6.png';

const LogoImg = styled.img`
    margin-right: 80px;
    &:first-child{
        margin-left: 80px;
    }
`;

function HypsterLogos(){
    return(
        <View bgColor='#f8f8f8' flex justC='space-around' alignI='center' h='248px' mT='112px'>
            <View flex justC='space-around' alignI='center' m='0 auto' maxW='1200px'>
                <LogoImg src={teamlogo1} alt='teamlogo'/>
                <LogoImg src={teamlogo2} alt='teamlogo'/>
                <LogoImg src={teamlogo3} alt='teamlogo'/>
                <LogoImg src={teamlogo4} alt='teamlogo'/>
                <LogoImg src={teamlogo5} alt='teamlogo'/>
                <LogoImg src={teamlogo6} alt='teamlogo'/>
            </View>
        </View>
    )
}

export default HypsterLogos;