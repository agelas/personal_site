import React, {Component} from 'react'
import {Div, Button, Modal, Text, ThemeProvider} from 'atomize'


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
                    [Spoilers-ish] So this is actually a fictional series by Naomi Novik that I got back into recently over my Summer because I could occasionally
                    squeeze in an hour or so of leisure reading believe it or not. When it comes to fiction, I'm a big fan of
                    alternative-history type books. I guess it's nice to mull on what might have been, especially with 2020 going the 
                    way it is. At the time of this writing California is quite literally on fire and it looks like someone placed a 
                    Bladerunner-inspired VSCO filter on the sky. Anyways, the Temeraire series follows a British navy captain during
                    the Napoleonic Wars. And he gets a dragon. And so do a lot of other people. So not only do you have massive land
                    and naval battles playing out in Europe, but you also have 15-ton dragons in the sky carrying crews of soldiers
                    going at it in the sky over Europe as well. In this universe the dragons can speak and are pretty smart and also have
                    attachment issues to their humans and that plays out in a lot of interesting way. One of the things I really liked is 
                    that there was a whole different geo-political landscape that had to be accounted for during this time, which is dealt
                    with pretty extensively throughout the 9 books in this series. So, for example, Europe had a pretty difficult time
                    colonizing the world due to the presence of these dragons. Like the Aztec Empire was still around in 1800 because a 
                    dragon ate Hernan Cortes, which is pretty understandable. And for aspiring European colonists, gaining any footholds
                    in Asia was next to impossible because there existed the slight problem of 10-ton dragons that can breathe a typhoon
                    at you if you annoy them. If you ever have the time I would highly recommend giving this series a try.   
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

class TemModal extends Component {
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
            purple600: "#9C8FD6",
            purple700: "#6F5CC3"
            }
        }; 

        return(
            <ThemeProvider theme={theme}>
            <Div d="flex" align="flex-start" justify={{xs: "center"}}>
                <Button
                    bg="purple600"
                    hoverBg="purple700"
                    rounded="circle"
                    m={{b: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                    textSize={{xs:"caption", md: "body"}}
                    textWeight={{ xs: '400', md: '500' }}
                    onClick={() => this.setState({showModal: true})}
                >
                    Temeraire 
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
export default TemModal;