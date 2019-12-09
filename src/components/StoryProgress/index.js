import React from "react";
import View from '../../styled/View';

class StoryProgress extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intro: [
                {
                    num: 42,
                    text: 'WEB DESIGN PROJECTS',
                },
                {
                    num: 123,
                    text: 'HAPPY CLIENT',
                },
                {
                    num: 15,
                    text: 'AWARD WINNER',
                },
                {
                    num: 99,
                    text: 'CUP OF COFFEE',
                },
                {
                    num: 24,
                    text: 'MEMBERS',
                }
            ]
        }
    }
    renderProgressItem = () => (
        this.state.intro.map( (item, index) => (
            <View key={index}>
                {(index === 4 ) ? 
                    (<View flex h='100%' w='240px' c='white' justC='center' tALign='center' bL='solid #b5eae0 2px' bR='solid #b5eae0 2px'>
                        <View p='70px 25px' alignI='center'>
                            <View fontSize='65pt' fontF="'Montserrat'" fontW='bold' c='white' tAlign='center'>
                                {item.num}
                            </View>
                            <View fontSize='10pt' fontF="'Montserrat'">
                                {item.text}
                            </View>
                        </View>
                    </View>
                    )
                    : (<View flex h='100%' w='240px' c='white' justC='center' tALign='center' bL='solid #b5eae0 2px'>
                            <View p='70px 25px' alignI='center'>
                                <View fontSize='65pt' fontF="'Montserrat'" fontW='bold' c='white' tAlign='center'>
                                    {item.num}
                                </View>
                                <View fontSize='10pt' fontF="'Montserrat'">
                                    {item.text}
                                </View>
                            </View>
                        </View>
                    ) 
                }
            </View>
        )
    ))
    render(){
        return(
            <View flex justC='center' alignI='center' mT='50px' bgColor='#95e1d3' h='300px'>
                {this.renderProgressItem()}
            </View>
        )
    }
    
}
export default StoryProgress