import React from 'react'
import styled from 'styled-components';
import View from '../../styled/View';
import map from '../../assets/images/map.jpg';
import maplogo from '../../assets/images/map-logo.png'

const Open = styled.a`
    font-size: 30px;
    color: #f38181;
    font-weight: 800;
    font-family: 'Montserrat';
    text-decoration: none;
    margin-top: 15px;
    text-transform: uppercase;
    &::after{
        content: "";
        display: block;
        width: 60px;
        height: 2.5px;
        margin: 25px auto;
        background-color: #f38181;
    }
`;

function Map(){
    return(
        <View bgImg={map} flex mT='115px' bgRep='no-repeat'>
            <View flex m='50px auto' justC='space-between' alignI='center' fD='column'>
                <img src={maplogo}/>
                <Open href='https://goo.gl/maps/5jhsLyQ51Fn3Yi8k9'>Open Map</Open>
            </View> 
        </View>
    )
}

export default Map;