import React from 'react';
import "./style.css";
import ImagesInner from "../ImagesInner";

import Section from '../../Section';
import styled from 'styled-components';
import View from '../../styled/View';

function Cont(){
    return(
        <View flex m='0 auto' alignI='center' flexD='column'>          
            {/* <div className='section'>
                <div className="section_suptitle">What we do</div>
                <div className='section_title'>STORY ABOUT US</div>                
            </div> */}
            <Section suptitle='What we do' title='STORY ABOUT US'/>

            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero<br/>
            debitis blanditiis temporibusveniam vitae facilis nihil consectetur nostrum reprehenderit
            </p>
            <ImagesInner/>
        </View>  
    )
}

export default Cont