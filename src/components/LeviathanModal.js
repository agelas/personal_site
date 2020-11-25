import React, {Component} from 'react'
import {Div, Button, Modal, Text, ThemeProvider} from 'atomize'
//import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
//import {Client as Styletron} from 'styletron-engine-atomic';


const ModalSize = ({ isOpen, onClose }) => {

    return (
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW="48rem"
        >
            <Div
                minH="auto" 
                d="flex"
                flexDir="column"
                align="flex-start"
                textSize="display2"
                p={{x:"1rem", y: "5rem"}}
                bgSize = "contain"
            >
                <Text
                    textColor = "black600"
                    textSize = "paragraph"
                    textAlign = "center"
                    p={{l:"3rem", r:"3rem", y:"2rem"}}
                >
                    [Spoilers-ish] Imagine a world where any ethical considerations regarding the testing/genetic manipulation of
                    animals just went out the window. So people created very bizarre and very deadly creatures for war. We'll call
                    those people the "Allied Powers". And then imagine there also existed people who built equally deadly and bizarre
                    machines. Call those people the "Central Powers". And yeah now you have an alternative fiction universe based 
                    on World War 1. This is a trilogy that mostly takes place on a blimp made out of whale, if that makes any sense,
                    and follows two teens from different sides of the war who are struggling to keep their identities a secret while the
                    world is imploding on itself. This series has a very steam-punk vibe to it and is a great read for anyone who has the 
                    time to. Interspersed throughout the novels are some really vivid illustrations as well that do a fantastic job of
                    bringing the novels to life.  
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

class LevModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal: false
        };
    }

    render() {
        const {showModal} = this.state;
        
        //Need to set up some colors for our button
        const theme = {
            colors: {
            lightGreen600: "#66D30D",
            lightGreen700: "#499609"
            }
        }; 

        return(
            <ThemeProvider theme={theme}>
            <Div d="flex" align="flex-start">
                <Button
                    bg="lightGreen600"
                    hoverBg="lightGreen700"
                    rounded="circle"
                    m={{b: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                    onClick={() => this.setState({showModal: true})}
                >
                    Leviathan Trilogy 
                </Button>
                <ModalSize
                    isOpen={showModal}
                    onClose={() => this.setState({showModal: false})}
                />
            </Div>
            </ThemeProvider>
        );
    }
}
export default LevModal;