import React, {Component} from 'react'
import {Div, Button, Modal, Text} from 'atomize'


const ModalSize = ({ isOpen, onClose }) => {


    return (
        
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW="48rem"
        >
            <Div
                minH= {{lg: "auto"}}
                h= {{xs: "40rem"}} 
                d="flex"
                flexDir="column"
                align="flex-start"
                overflow="scroll"
            >
                <Text
                    textColor = "black600"
                    textSize = {{xs: "caption", lg: "paragraph"}}
                    textAlign = "center"
                    p={{lg: {l:"3rem", r:"3rem", y:"2rem"}}}
                >
                    I picked up this book in early 2020 because I wanted to get more familiar with common Python machine learning
                    libraries. Previously, I had taken Andrew Ng's Machine Learning class on Coursera and had also self-studied a
                    lot of material online and from various textbooks, both out of genuine interest and to help me with various research
                    projects I had (and still have) going on. Personally I found this a super enjoyable read, and I would definately
                    consider this a go-to reference for all things SKLearn, Keras, and TensorFlow. The step-by-step projects and 
                    examples really helped me get a grasp for how to build the various models covered in the book. As a general 
                    introduction to Machine Learning though, I think it lacks in the mathematical rigor one would need to get a 
                    solid intuition for what is really happening behind the scenes. With Andrew Ng's class, for example, all 
                    "programming" was done in MATLAB, which allows you to go in and actualy see your cost functions and
                    gradients and vectors change whenever you wanted to. And while a lot of equations are thrown at you in HOML, I
                    still felt that someone who hadn't been through something similar to Andrew Ng's course would find SKLearn or Keras
                    to be a sort of black box that just spits out results after you give it some input. But that might just be me.
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
            </Div>
        </Modal>
        
    );
};

class HOMLModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal: false
        };
    }

    render() {
        const {showModal} = this.state;

        return(
            <Div d="flex" align="flex-start" justify={{xs: "center"}}>
                <Button
                    bg="brand600"
                    hoverBg="brand700"
                    rounded="circle"
                    m={{b: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                    textSize={{xs:"caption", md: "body"}}
                    textWeight={{ xs: '400', md: '500' }}
                    onClick={() => this.setState({showModal: true})}
                >
                    HOML with Scikit-Learn, Keras, and Tensorflow
                </Button>
                <ModalSize
                    isOpen={showModal}
                    onClose={() => this.setState({showModal: false})}
                />
            </Div>
        );
    }
}
export default HOMLModal;