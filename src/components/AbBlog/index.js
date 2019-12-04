import React from 'react'
import View from '../../styled/View';

import fblog1 from '../../assets/images/fblog1.png';
import fblog2 from '../../assets/images/fblog2.png';
import fblog3 from '../../assets/images/fblog3.png';

class AbBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intro: [
                {
                    src: fblog1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                },
                {
                    src: fblog2,
                    text: "Consectetur adipiscing elit, sed do eiusmod tempor",
                },
                {
                    src: fblog3,
                    text: "Sed do eiusmod tempor incididunt ut labore",
                }
            ],
        }
    }
    renderBlogItem = () => (
        this.state.intro.map( (item) => (
            <View mT='30px' w='345px' flex>
                <img src={item.src}/>
                <View mL='20px' tTf='uppercase' fontSize='12px' fontW='bold' lh='1.5'>{item.text}
                    <View fontW='200' fontStyle='italic' op='0.6' tTf='capitalize'>Jan 9, 2016</View>
                </View>
            </View>
        ))
    )

    render(){
        return(
            <View w='340px' m='0 82px 0 30px'>
                <View m='0 auto 15px' fontW='bold' o='0.7' >BLOGS</View>
                {this.renderBlogItem()}
            </View>
        )
    }
    
}

export default AbBlog;