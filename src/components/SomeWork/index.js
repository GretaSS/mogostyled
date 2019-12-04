import React from 'react';
import './style.css';
import styled from "styled-components";
import View from '../../styled/View';

import work1 from '../../assets/images/work-1.jpg';
import work2 from '../../assets/images/work-2.jpg';
import work3 from '../../assets/images/work-3.jpg';
import work4 from '../../assets/images/work-4.jpg';
import work5 from '../../assets/images/work-5.jpg';
import work6 from '../../assets/images/work-6.jpg';
import work7 from '../../assets/images/work-7.jpg';
import Section from '../../Section';

function SomeWork(){
    return(
        <View mT='100px'>
            <Section 
                suptitle='What we do' 
                title='Some of our work' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

            <View flex h='780px' fF='wrap' fD='column'>
                <div><img src={work1}/></div>
                <div><img src={work3}/></div>
                <div><img src={work2}/></div>
                <div><img src={work4}/></div>
                <div className='long'><img src={work5}/></div>
                <div><img src={work6}/></div>
                <div><img src={work7}/></div>
            </View>
        </View>
    )
}

export default SomeWork;