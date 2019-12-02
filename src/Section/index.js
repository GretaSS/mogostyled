import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';

class Section extends React.Component{

    render(){
        return(
            <View>
                <View w='100%' maxW='880px' textAlign= 'center' m='65px auto'>
                    <View className="section_suptitle">{props.suptitle}</View>
                    <View className='section_title'>{props.title}</View>
                </View>
            </View>
        )
    }
    
}

export default Section