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
                    This book provided a very solid introduction to the core concepts of ReactJS and good practices used by frontend
                    developers these days. The git repository set up by the author was also super handy, as I found it useful to be able
                    to reference various code snippets when tackling the end-of-chapter questions. The last section of the book also did
                    a good job of tying everything together through a React project where you built a blog and deployedit using netlify.
                    There were a few times when things got a tad confusing when examples made use of features that weren't covered. The
                    biggest that comes to mind is when the author says you need to use class components to change a component's state,
                    but then uses the new hooks system in the demo project at the end to receive and update state using functional components.
                    I would have also liked to see some discussion regarding common libraries used with React, such as Redux. Overall,
                    this was a great introduction to React and I think it makes a good starter for anyone.
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

class REModal extends Component {
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
                    bg="info500"
                    hoverBg="info600"
                    rounded="circle"
                    m={{b: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                    textSize={{xs:"caption", md: "body"}}
                    textWeight={{ xs: '400', md: '500' }}
                    onClick={() => this.setState({showModal: true})}
                >
                    React Explained
                </Button>
                <ModalSize
                    isOpen={showModal}
                    onClose={() => this.setState({showModal: false})}
                />
            </Div>
        );
    }
}
export default REModal;