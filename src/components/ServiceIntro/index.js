import React from 'react';
// import './style.css'
import styled from "styled-components";
import View from '../../styled/View';
import Text from '../../styled/Text';
import photo from '../../assets/images/phtography.png';
import creativ from '../../assets/images/creativity.png';
import web from '../../assets/images/web.png';

const But = styled.button`
    justify-content: flex-end;
    border:none;
    background-color:white;
    opacity: 0.3;
    font-size: 25px;
    cursor: pointer;
`;

const Scr = styled(Text)`
    ::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #F5F5F5;
    };
    ::-webkit-scrollbar{
        width: 7px;
        background-color: #F5F5F5;
    };
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #95e1d3;
    };
`;

class ServiceIntro extends React.Component{
    constructor(props) {
        super(props);
        // this.dropDown = this.dropDown.bind(this);
        this.state = {
            navs: [
                { name: 'Photography', id: 1, src: photo, text: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                { name: 'Creativity', id: 2, src: creativ, text: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                { name: 'WEB Design', id: 3, src: web, text: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}                
            ],
            showId: 1,
        }
      }
    
    dropDown = ( id ) => {
        this.setState( { showId: id } );
    }
       
    renderLogoNameText = () => (
          this.state.navs.map( ( item ) => (
            <View key={item.id} w='600px' mB='7px'>
                <View flex justC='space-between' p='15px' alignI='center' border='solid rgba(0, 0, 0, 0.068) 1px'>
                    <img src = { item.src } alt='item'/>
                    <View mL='15px' fontSize='15pt' tTf='uppercase'> { item.name } </View>
                    <But onClick ={ () => this.dropDown(item.id) }>&#8657;</But>
                </View>
                { this.state.showId === item.id && 
                    <View p='20px' font='14pt' border='solid rgba(0, 0, 0, 0.068) 1px' bT='none'>
                        <Scr m='0' maxH='135px' overflow='auto' op='0.6'>{ item.text }</Scr>
                    </View>       
                    //   context: "&#8659;" ;
                }
            </View>
        ))
    )

    render(){
        return(
            <View p='0 30px' h='380px'>
                { this.renderLogoNameText() }
            </View>
        )
    }
}

export default ServiceIntro