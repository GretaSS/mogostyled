import React from 'react';
import "./style.css";
import ImagesInner from "../ImagesInner";
import Section from '../../Section';
import View from '../../styled/View';

function Cont(){
    return(
        <View flex m='0 auto' alignI='center' flexD='column'>          
            <Section 
                suptitle='What we do'
                title='STORY ABOUT US'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero
                debitis blanditiis temporibusveniam vitae facilis nihil consectetur nostrum reprehenderit'
            />
            <ImagesInner/>
        </View>  
    )
}

export default Cont