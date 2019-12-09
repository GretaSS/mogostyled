import React from 'react';
import StoryImages from "../StoryImages";
import View from '../../styled/View';
import Section from '../Section';

function StoryAboutUs(){
    return(
        <View flex m='0 auto' alignI='center' fD='column'>
            <Section 
                suptitle='What we do'
                title='STORY ABOUT US'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero
                debitis blanditiis temporibusveniam vitae facilis nihil consectetur nostrum reprehenderit'
            />
            <StoryImages/>
        </View>
    )
}

export default StoryAboutUs