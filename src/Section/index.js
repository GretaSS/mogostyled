import React from 'react';
import styled from 'styled-components';
import View from '../styled/View';

const After = styled(View)`
    &:after{
        content: "";
        display: block;
        width: 60px;
        height: 2.5px;
        margin: 25px auto;
        background-color: #f38181;
    }
`;

const Lorem = styled.p`
    text-align: center;
    font-family: 'Arial';
    font-size: 15pt;
    margin-bottom: 90px;
    opacity: 0.3;
    line-height: 1.5;
`

export default props => (
    <View w='100%' maxW='880px' textAlign= 'center' m='65px auto'>
        <View fontF="Kaushan Script" fontSize= "24pt" w="100%" lineH="0.5" >{props.suptitle}</View>
        <After fontF='Montserrat' textTf='uppercase' fontSize='30pt' fontW='bold' lineH='2.5'>{props.title}</After>
        <Lorem>{props.text}</Lorem>
    </View>
)

// import React, {Component} from 'react';
// import styled from 'styled-components';
// import View from '../styled/View';

// const after = styled(View)`
//     &:after{
//         content: "";
//         display: block;
//         width: 60px;
//         height: 2.5px;
//         margin: 25px auto;
//         background-color: #f38181;
//     }
// `;

// class Section extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//         <View w='100%' maxW='880px' textAlign= 'center' m='65px auto'>
//             <View fontF="Kaushan Script" fontSize= "24pt" w="100%" lineH="0.5" >{this.props.suptitle}</View>
//             <View fontF='Montserrat' textTf='uppercase' fontSize='30pt' fontW='bold' lineH='2.5'>{this.props.title}</View>
//         </View>
//         )
//     }
    
// }
// export default Section