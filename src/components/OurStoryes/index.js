import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';
import Text from '../../styled/Text';

import jan15 from "../../assets/images/jan15.jpg";
import jan14 from "../../assets/images/jan14.jpg";
import jan12 from "../../assets/images/jan12.jpg";
import comment from '../../assets/images/comment.png';
import seen from '../../assets/images/seen.png';
import Section from '../../Section';

const Hr =styled.hr`
    background-color: #e5e5e59f;
    opacity: 0.3;
    width: 100%;
    height: 0.1px;
`;

class OurStoryes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intro: [
                {
                    img: jan15,
                    day: "15 Jan",
                    heading: "Lorem ipsum dolor sit amet",
                    about: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    seen: 542,
                    comment: 17,
                },
                {
                    img: jan14,
                    day: "14 Jan",
                    heading: "Sed do eiusmod tempor",
                    about: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    seen: 992,
                    comment: 42,
                },
                {
                    img: jan12,
                    day: "12 Jan",
                    heading: "Incididunt ut labore et dolore",
                    about: "Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    seen: 1560,
                    comment: 98,
                },
            ],
        }
    }

    renderCallendarItem = () => (
        this.state.intro.map( (item, index)=> (
            <View key={index} fontF="'Montserrat'">
                <View bgImg={item.img} w='379px' h='240px'>
                    <View w='60px' h='70px' bgColor='#95e1d3' c='white' fontSize='25px' fontW='bold' pos='relative' top='160px' right="10px">{item.day}</View>
                </View>

                <View m='15px auto' lH='1' fontW='600' tTF='uppercase' fontSize='14px'>{item.heading}</View>
                <View w='380px' op='0.6' fontSize='14px' mB='25px'>{item.about}</View>
                <Hr/>
                <View flex alignI='center' justC='space-between' w='110px' fontSize="14px">
                    <img src={seen}/>
                    <Text op='0.5'>{item.seen}</Text>
                    <img src={comment}/>
                    <Text  op='0.5'>{item.comment}</Text>
                </View>
            </View>
        ) )
    )
    render(){
        return(
            <View>
                <Section suptitle='Our Storyes' title='Latest Blog' />
                <View  flex m='0 auto' alignI='center' justC='space-between' maxW='1200px'>
                    {this.renderCallendarItem()}
                </View>
            </View>
        )
    }
}
export default OurStoryes



// import React from 'react';
// import "./style.css";
// import jan15 from "../../assets/images/jan15.jpg";
// import jan14 from "../../assets/images/jan14.jpg";
// import jan12 from "../../assets/images/jan12.jpg";
// import comment from '../../assets/images/comment.png';
// import seen from '../../assets/images/seen.png';
// import Section from '../../Section';


// function OurStoryes(){
//     return(
//         <div className="OurStoryes">
//             <Section suptitle='Our Storyes' title='Latest Blog' />

//             <div className='blog-item'>
//                 <div className='item-calendar'>
//                     <div className='calendar-img' style={ { backgroundImage: `url(${jan15})`} }>
//                         <div>15 Jan</div>
//                     </div>
                    
//                     <div className='heading'>Lorem ipsum dolor sit amet</div>
//                     <div className='about'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
//                     <hr/>
//                     <div className='seen-comment'>
//                         <img src={seen}/>
//                         <span>542</span>
//                         <img src={comment}/>
//                         <span>17</span>
//                     </div>
//                 </div>
            
//                 <div className='item-calendar'>
//                     <div className='calendar-img' style={ { backgroundImage: `url(${jan14})`} }>
//                         <div>14 Jan</div>
//                     </div>
                    
//                     <div className='heading'>Sed do eiusmod tempor</div>
//                     <div className='about'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
//                     <hr/>
//                     <div className='seen-comment'>
//                         <img src={seen}/>
//                         <span>992</span>
//                         <img src={comment}/>
//                         <span>42</span>
//                     </div>
//                 </div>
            
//                 <div className='item-calendar'>
//                     <div className='calendar-img' style={ { backgroundImage: `url(${jan12})`} }>
//                         <div>12 Jan</div>
//                     </div>

//                     <div className='heading'>Incididunt ut labore et dolore</div>
//                     <div className='about'>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
//                     <hr/>
//                     <div className='seen-comment'>
//                         <img src={seen}/>
//                         <span>1560</span>
//                         <img src={comment}/>
//                         <span>98</span>
//                     </div>
//                 </div> 
//             </div>
//         </div>
//     )
// }
// export default OurStoryes