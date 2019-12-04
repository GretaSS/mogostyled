import React from 'react'
import styled from 'styled-components';
import View from '../../styled/View';
import Text from '../../styled/Text';

import AbMogo from '../AbMogo';
import AbBlog from '../AbBlog';
import AbInsta from '../AbInsta';

const Hr = styled.hr`
    background-color: #e5e5e59f;
    opacity: 0.3;
    width: 1192px;
    height: 0.1px;
`;

function Footer(){
    return(
        <View flex alignI='center' fD='column'>
            <View flex justC='space-between' alignI='center' m='74px auto 70px' maxW='1200px'>
                <AbMogo/>
                <AbBlog/>
                <AbInsta/>
            </View> 
            <Hr/>
            <View fontW='500' fontSize='14px'>© 2016 MoGo free PSD template by <Text color='#ff8585'>Laaqiq</Text> </View>
        </View>
    )
}

export default Footer;