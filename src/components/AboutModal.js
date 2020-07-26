import React, {Component} from 'react'
import {Div, Button, Modal, Icon, Text, StyleReset, ThemeProvider} from 'atomize'
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import bubbleground from '../double-bubble-outline/double-bubble-outline.png'


const ModalSize = ({ isOpen, onClose }) => {

    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
            black900: "1d1d1e"
        }
    }; 

    return (
        
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW="100vw"
        m="0"
        h="100vh"
        >
            <Div
                textColor = "black900"
                minH="auto" //Yeah idk how to make this fill hopefully it scales
                w="100vw"
                d="flex"
                flexDir="column"
                align="flex-start"
                textSize="display2"
                p={{x:"1rem", y: "5rem"}}
                bgImg = {bubbleground}
                bgSize = "contain"
            >
                A Little About Me
                <Text
                    textColor = "black600"
                    textSize = "title"
                    textAlign = "center"
                    p={{l:"3rem", r:"3rem", y:"2rem"}}
                >
                    I grew up in the Bay Area before heading off the the East Coast to attend Johns Hopkins University.
                    I had a thing for chemistry in high school, so at first I entered as a Chemical & Biomolecular 
                    Engineering (ChemBE) major, but I soon realized that ChemBE was less chemistry and more a flavor of
                    math I wasn't a huge fan of (like no offense but solving triple integrals to find heat flux down a pipe
                    just isn't my thing). So then I ended up in Materials Science & Engineering (MSE), which was more chemistry 
                    less math and have been there ever since. Oh and I also picked up a CS minor along the way, and for some
                    reason I do a lot more CS stuff now. Probably because CS requires a computer and a lot of patience, whereas
                    MSE requres a whole lab and a lot of patience but who knows.
                </Text>
                About This Website
                <Text
                    textColor = "black600"
                    textSize = "title"
                    textAlign = "center"
                    p={{l:"3rem", r:"3rem", y:"2rem"}}
                    >
                        Frankly, the only reason this website exists is because I got sort of put in a leadership role for
                        this research project that would need a website at some point. In other words I had a week to decide
                        between React or Angular (sorry Vue) JS. React won. And this grew out of my despereate attempt to wrap
                        my head around React during that process. I'll be the first to admit that the way I built this website
                        might be...abnormal to say the least. But there's still a lot I'm trying to learn. 
                </Text>
            </Div>
            <Div d="flex" justify="flex-end">
                <Button
                    onClick={onClose}
                    bg="gray200"
                    textColor="medium"
                    m={{r:"1rem"}}
                >
                Close
                </Button>
                <Button onClick={onClose} bg="info700">
                    OK
                </Button>
                
            
            </Div>
        </Modal>
        
    );
};

class AboutModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal: false
        };
    }

    render() {
        const {showModal} = this.state;

        return(
            <div>
            <Button
                bg="info600"
                hoverBg="info600"
                rounded="circle"
                p={{r:"1.5rem", l: "1rem"}}
                shadow="3"
                hoverShadow="4"
                prefix={
                    <Icon
                        name="Loading2"
                        size="20px"
                        color="white"
                        m={{r: "0.5rem"}}
                    />
                }
                onClick={() => this.setState({showModal: true})
                }
            >
                About
            </Button>
            <ModalSize
                isOpen={showModal}
                onClose={() => this.setState({showModal: false})}
            />
            </div>
        );
    }
}
export default AboutModal;