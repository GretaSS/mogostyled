import React from "react";
import "./style.css"
import ipad from "../../assets/images/ipad.png";
import iphone from "../../assets/images/iphone.png";

import Section from '../../Section';

function UniqueDesign(){
    return(
        <section className='UniqueDesign'>
            <div className='feature'>
                <Section
                    suptitle='For all devices' 
                    title='Unique design' 
                />

                <div className='devices'>
                    <div className='ipad'><img src={ipad}></img></div>
                    {/* <div className='iphone'> <img src={iphone}></img> </div> */}
                </div>

            </div> 
        </section>
    )
}
export default UniqueDesign