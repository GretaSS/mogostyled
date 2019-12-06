import React from 'react';
import styled from "styled-components";
import View from '../../styled/View';
import Text from '../../styled/Text';
import citate from '../../assets/images/citate.png';

const But = styled.button`
    border: none;
    outline: none;
    width: 50px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    font-size: 40px;
    opacity: 0.5;
`;

class ServiceSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intro: [ 
                {
                    id: 0,
                    name: "Jon Doe", 
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                },
                {
                    id: 1,
                    name: "Lea Mitchel", 
                    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation. Ut enim ad minim veniam, ",
                },
                {
                    id: 2,
                    name: "Fin Johns", 
                    text: "Ut enim ad minim veniam.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation. Ut enim ad minim veniam.",
                },
                
            ],
            showId: 0,
        }
    }
    renderSliderItem = () => ( 
        this.state.intro.map( (item, index) => ( 
            this.state.showId == item.id && 
            <View key={index} flex justC='center' alignI='center' m='0 auto' maxW='1200px'>
                <But onClick = { () => this.leftItem(item.id)}>&#60;</But>
                    <View flex justC='space-between' alignI='center' m='0 30px'>
                        <img src={citate}/>
                        <View p='40px'>
                            <Text fontSize="22px" fontF='Arial' fontStyle='italic' op='0.5'>{item.text}</Text>
                            <View fontSize="25px" fontF="'Kaushan Script'">-{item.name}</View>
                        </View>
                    </View>
                <But onClick = { () => this.rightItem(item.id+1)}>&#62;</But>
            </View>
        ))
    )
    leftItem = (id) => {
        this.setState( { showId: id-- } )
    }

    rightItem = (id) => {
        id >= 0 ?
        this.setState( { showId: id } )
        :
        this.setState( { showId: 0 } ) 
    }
    render(){
        return(
            <View bgColor='rgba(0, 0, 0, 0.082)' w='100%' h='240px' mT='145px'>
                {this.renderSliderItem()}
            </View>
        )
    }
}

export default ServiceSlider

                // <div className='slider'>
                //     <button className='left' onClick = { () => this.leftItem()}>&#60;</button>
                //     <div className='slider-intro'>
                //         <img src={citate}/>
                //         <div className='citate-autor'>
                //             <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                //             <div>-Jon Doe</div>
                //         </div>
                //     </div> 
                //     <button className='right' onClick = { () => this.rightItem()}>&#62;</button>   
                // </div> 