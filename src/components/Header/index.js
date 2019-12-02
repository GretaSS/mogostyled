import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';

const Menu = styled.ul`
    display: inline-flex;
    list-style: none;
    font-family: 'Montserrat';
    font-size: 17px;
    text-transform: uppercase;
`;
const Link = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
`;
const MLink = styled.a`
    font-family: 'Montserrat', sans-serif;
    margin: 15px;
    color: white;
    font: uppercase;
    text-decoration: none;
    font-size: 15px;
    &:hover{
        color: #fce38a;
        text-decoration: underline;
    };
    &:active{
        font-size: 17px;
    }
`;

function Header() {
    return(
        <View w='100%' position='absolute'>
            <View flex m='30px auto' p='15px' maxW='1200px' alignI='center' justC='space-between'> 
                <View color='white' m='15px 0px' fontSize='30px' fontW='700' fontF="'Montserrat Bold', sans-serif">MoGo</View> 
                <Menu>
                    <Link><MLink href="#">About</MLink></Link>
                    <Link><MLink href="#">Service</MLink></Link>
                    <Link><MLink href="#">Work</MLink></Link>
                    <Link><MLink href="#">Blog</MLink></Link>
                    <Link><MLink href="#">Contact</MLink></Link>   
                </Menu>
            </View>
        </View>
    );
};

export default Header;