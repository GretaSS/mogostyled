import React from "react";
import View from '../../styled/View';
import feature from '../../assets/images/feature.jpg';
import ipad from "../../assets/images/ipad.png";
import iphone from "../../assets/images/iphone.png";

import Section from '../Section';

function UniqueDesign(){
    return(
        <View flex justC='space-between' alignI='center' fD='column' w='100%' mB='90px'>
            <View bgImg={feature} flex fD='column' w='100%' h='100vh' bgRep='no-repeat' bgSize='cover'>
                <Section
                    suptitle='For all devices' 
                    title='Unique design' 
                />

                <View flex justC='space-between' maxW='600px' m='0 auto' >
                    <View pos='relative' top="23px"><img src={ipad} alt='ipad'></img></View>
                    <View pos='relative' top='213px' left='-93px' op='.98'><img src={iphone} alt='iphone'></img></View>
                </View>

            </View> 
        </View>
    )
}
export default UniqueDesign