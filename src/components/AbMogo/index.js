import React from 'react';
// import './style.css';
import View from '../../styled/View';
import Text from '../../styled/Text';
import styled from 'styled-components';

import facebook from '../../assets/images/facebook.png';
import twetter from '../../assets/images/twetter.png';
import instagram from '../../assets/images/instagram.png';
import pinterest from '../../assets/images/pinterest.png';
import youtube from '../../assets/images/youtube.png';
import wiki from '../../assets/images/wiki.png';
import t from '../../assets/images/t.png';


function AbMogo(){
    return(
        <View w='464px'>
            <View fintSize='46px' fontW='800' op='0.2'>MoGo</View>
            <Text fintSize='46px' m='20px 0 42px' lineH='2' op='0.6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text><Text fontW='bold' fontSize='20px'>15k</Text>followers</Text>
            <hr/>
            <div className='ab-follow'>
                <span>Follow Us:</span>
                <img src={facebook}/>
                <img src={twetter}/>
                <img src={instagram}/>
                <img src={pinterest}/>
                <img src={youtube}/>
                <img src={wiki}/>
                <img src={t}/>
            </div>
            <div className='ab-input'>
                <input placeholder='Your Email...'/>
                <button>SUBSCRIBE</button>
            </div>
        </View>
    )
}

export default AbMogo;