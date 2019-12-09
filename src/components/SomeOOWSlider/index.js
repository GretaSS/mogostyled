import React from 'react';
import styled from "styled-components";
import View from '../../styled/View';
import Text from '../../styled/Text';
import joshua from '../../assets/images/joshua.png';

const Button = styled.button`
    border: none;
    outline: none;
    width: 50px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    font-size: 40px;
    opacity: 0.2;
    color: ${props => (props.left ? "blue" : "red" )};
`;

class SomeOOWSlider extends React.Component{
    render(){
        return(
            <View w='100%' h='240px' m='100px 0'>
                <View flex justC='center' m='0 auto' maxW='1200px'>
                    <Button left>&#60;</Button>

                    <View flex justC='space-between' alignI='center' m='0 30px'>
                        <img src={joshua} alt='people' />
                        <View p='40px'>
                            <Text fontSize='22px' fontF="'Arial,Helvetica'" fontStyle='italic' op='0.5'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                            </Text>
                            <View fontSize='25px' fontF="'Kaushan Script'">-Joshua Earle</View>
                        </View>
                    </View>

                    <Button right>&#62;</Button>
                </View>
            </View>
        )
    }
}

export default SomeOOWSlider