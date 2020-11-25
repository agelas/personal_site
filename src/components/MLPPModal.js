import React, {Component} from 'react'
import {Div, Button, Modal, Text} from 'atomize'
//import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
//import {Client as Styletron} from 'styletron-engine-atomic';


const ModalSize = ({ isOpen, onClose }) => {

    //const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    //const engine = new Styletron();

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
                    I managed to get a copy of the 2012 edition of this book a while back when I first started getting interested 
                    in taking a deeper dive into the mathematical side of machine learning, especially in how AI relates to probability
                    and statistics. And let me just say this book didn't hold back any punches at all. This book is full of proofs and
                    equations, which can make this book very difficult to fight through. And I say fight because it can be a real struggle
                    just trying to understand a single line because the abbreviations and mathematical notation is so dense. Thanks to 
                    this book I figured out that capital pi represents the product operator about 4 months before I saw it in my thermodynamics
                    class. This edition of the book did all code demos in MATLAB, as apparently that was the ML vibe back in 2012, but honestly
                    I didn't really look too much at the code demos- I was there just for the math and explanations. Unlike most intro machine
                    learning books, this one takes almost 7 chapters before you get to basic linear regression. In between there's a hefty 
                    amount of material/review on generative models for discrete data, Gaussian models, Bayesian and Frequentist statistics, 
                    and some other stuff that'll be rather daunting if you haven't first taken a probability and statistics class. Frankly,
                    you will need a pretty strong math background that involved classes in probability/statistics, multivariable calculus, linear algebra,
                    and some differential equations for much of this book to even begin to make sense. I guess what I'm saying is this can be 
                    an interesting challenge to read if you're up for it. But it will suck up a lot of time, both because this thing is over
                    a thousand pages long and because those pages can be difficult to decipher. 
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

class MLPPModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal: false
        };
    }

    render() {
        const {showModal} = this.state;

        return(
            <Div d="flex" align="flex-start">
                <Button
                    bg="danger600"
                    hoverBg="danger700"
                    rounded="circle"
                    m={{b: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                    onClick={() => this.setState({showModal: true})}
                >
                    Machine Learning: A Probabilistic Perspective 
                </Button>
                <ModalSize
                    isOpen={showModal}
                    onClose={() => this.setState({showModal: false})}
                />
            </Div>
        );
    }
}
export default MLPPModal;