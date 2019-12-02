import React from "react";
import "./style.css";
import service from '../../assets/images/services.jpg';
import ServiceIntro from '../ServiceIntro';
import ServiceSlider from '../ServiceSlider';

import Section from '../../Section';

class Service extends React.Component {

    render(){
    return(
        <div className="Service">
            <Section 
                suptitle='Service' 
                title='What we do' 
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero
                debitis blanditiis temporibusveniam vitae facilis nihil consectetur.'
            />

            <div className='container'>
                <img src={service}></img>
                <ServiceIntro/>
            </div>
            
            <ServiceSlider/>
        </div>
    )
    }
}
export default Service