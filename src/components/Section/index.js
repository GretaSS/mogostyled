import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';

const After = styled(View)`
    &:after{
        content: "";
        display: block;
        width: 60px;
        height: 2.5px;
        margin: 25px auto;
        background-color: #f38181;
    }
`;

const Lorem = styled.p`
    text-align: center;
    font-family: 'Arial';
    font-size: 15pt;
    margin-bottom: 90px;
    opacity: 0.3;
    line-height: 1.5;
`

export default props => (
    <View w='100%' maxW='880px' tAlign= 'center' m='65px auto'>
        <View fontF="Kaushan Script" fontSize= "24pt" w="100%" lh="0.5" >{props.suptitle}</View>
        <After fontF='Montserrat' tTf='uppercase' fontSize='30pt' fontW='bold' lh='2.5'>{props.title}</After>
        <Lorem>{props.text}</Lorem>
    </View>
)