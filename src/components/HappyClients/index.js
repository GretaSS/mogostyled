import React from "react";
import "./style.css";
import matthew from '../../assets/images/matthew.png';
import nick from '../../assets/images/nick.png';
import jaelynn from '../../assets/images/jaelynn.png';
import mike from '../../assets/images/mike.png';
import Section from "../../Section";

class HappyClients extends React.Component{
    render(){
        return(
            <div className='peoplesay'>
                <Section suptitle="Happy Clients" title="What People Say"/>
                <div className='clients'>
                    <div className='clients-item'>
                        <img className='item-pic' src={matthew}/>
                        <div className='item-ab'>
                            <div className='item-name'>MATTHEW DIX</div>
                            <div className='item-proff'>Graphic Design</div>
                            <div className='item-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
                        </div>
                    </div>

                    <div className='clients-item'>
                        <img className='item-pic' src={nick}/>
                        <div className='item-ab'>
                            <div className='item-name'>NICK KARVOUNIS</div>
                            <div className='item-proff'>Graphic Design</div>
                            <div className='item-lorem'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
                        </div>
                    </div>
                </div>

                <div className='clients'>
                    <div className='clients-item'>
                        <img className='item-pic' src={jaelynn}/>
                        <div className='item-ab'>
                            <div className='item-name'>JAELYNN CASTILLO</div>
                            <div className='item-proff'>Graphic Design</div>
                            <div className='item-lorem'>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </div>
                    </div>

                    <div className='clients-item'>
                        <img className='item-pic' src={mike}/>
                        <div className='item-ab'>
                            <div className='item-name'>MIKE PETRUCCI</div>
                            <div className='item-proff'>Graphic Design</div>
                            <div className='item-lorem'>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HappyClients;



// import React from "react";
// import "./style.css";
// import matthew from '../../assets/images/matthew.png';
// import nick from '../../assets/images/nick.png';
// import jaelynn from '../../assets/images/jaelynn.png';
// import mike from '../../assets/images/mike.png';
// import Section from "../../Section";


// function HappyClients(){
//     return(
//             <div className='peoplesay'>
//                 <Section suptitle="Happy Clients" title="Happy Clients"/>
                
//                 <div className='sec2'>

//                     <div className='clients'>
//                             <div className='clients-item'>
//                                 <img className='item-pic' src={matthew}/>
//                                 <div className='item-name'>MATTHEW DIX</div>
//                                 <div className='item-proff'>Graphic Design</div>
//                                 <div className='item-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</div>
//                             </div>

//                             <div className='clients-item'>
//                                 <img className='item-pic' src={nick}/>
//                                 <div className='item-name'>NICK KARVOUNIS</div>
//                                 <div className='item-proff'>Graphic Design</div>
//                                 <div className='item-lorem'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
//                             </div>
//                     </div>

//                     <div className='clients'>
//                             <div className='clients-item'>
//                                 <img className='item-pic' src={jaelynn}/>  
//                                 <div className='item-name'>JAELYNN CASTILLO</div>
//                                 <div className='item-proff'>Graphic Design</div>
//                                 <div className='item-lorem'>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
//                             </div>

//                             <div className='clients-item'>
//                                 <img className='item-pic' src={mike}/>    
//                                 <div className='item-name'>MIKE PETRUCCI</div>
//                                 <div className='item-proff'>Graphic Design</div>
//                                 <div className='item-lorem'>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div> 
//                             </div>
//                     </div>
                        
//                 </div>
//             </div> 
//     )
// }
// export default HappyClients;