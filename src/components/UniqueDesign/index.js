import React from "react";
import styled from "styled-components";
import View from '../../styled/View';
import feature from '../../assets/images/feature.jpg';
import ipad from "../../assets/images/ipad.png";
import iphone from "../../assets/images/iphone.png";

import Section from '../../Section';

function UniqueDesign(){
    return(
        <View flex justC='space-between' alignI='center' fD='column' w='100%'>
            <View bgImg={feature} flex w='100%' h='100vh' bgRep='no-repeat' bgSize='cover'>
                <Section
                    suptitle='For all devices' 
                    title='Unique design' 
                />

                <View flex justC='space-between' alignI='flex-end' maxW='600px' m='0 auto' >
                    <View order='0' f='2'><img src={ipad}></img></View>
                    {/* <View><img src={iphone}></img></View> */}
                </View>

            </View> 
        </View>
    )
}
export default UniqueDesign