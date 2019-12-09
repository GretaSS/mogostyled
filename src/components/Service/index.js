import React from "react";
import View from '../../styled/View';
import service from '../../assets/images/services.jpg';
import ServiceIntro from '../ServiceIntro';
import ServiceSlider from '../ServiceSlider';

import Section from '../Section';

function Service(){
    return(
        <View flex justC='space-between' alignI='center' fD='column'>
            <Section 
                suptitle='Service' 
                title='What we do' 
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero
                debitis blanditiis temporibusveniam vitae facilis nihil consectetur.'
            />

            <View flex justC='space-between' alignI='center' m='0 auto' p='15px' maxW='1200px'>
                <img src={service} alt='service'></img>
                <ServiceIntro/>
            </View>
            
            <ServiceSlider/>
        </View>
    )
}
export default Service