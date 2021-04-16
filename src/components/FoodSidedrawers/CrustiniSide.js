import React from 'react'
import {Div, Button, SideDrawer, Text} from 'atomize'
import Crustinis from '../../Pictures/Crustinis.jpg'

const CrustiniSideDrawer = ({isOpen, onClose}) => {
    return(
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{xs:"100vw", md:"40rem"}}>
            <Div
                d="flex"
                m={{b:"4rem"}}
                overflow = "auto"
            >
                <Text>
                    I was bored and the nearby supermarket had mini baguettes on sale because they were 0.2 seconds from going stale. If you ever need a cute
                    side dish or appetizer, here's a quick thing you can do with literally any type of sliced bread. 
                    <br />
                    &bull; In a bowl, mix together a hefty amount of olive oil (like enough to coat both sides of your bread), a teaspoon or so of salt, and a teaspoon of pepper.
                    <br />
                    &bull; Drench your sliced baguettes in olive oil and put on a cooking sheet. Then throw some cheese on top. Set your oven to 375F, and leave your bread
                    in oven until crispy (like 15 minutes or something idk I just open the oven and check). 
                    <br />
                    &bull; I threw some fresh tomatoes, olives, and microgreens on top for the aesthetic. 
                </Text>
            </Div>
            <Div
                bgImg={Crustinis}
                bgSize="contain"
                bgPos="center"
                bgRepeat="no-repeat"
                h="40vw"
            >
                <Div></Div>
            </Div>
            <Div
                d="flex"
                justify="flex-end"
            >
                <Button
                    onClick={onClose}
                    bg="gray200"
                    textColor="black100"
                    m={{r:"1rem"}}
                >
                Ok
                </Button>
            </Div>
        </SideDrawer>
    );
};

class CrustiniSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideDrawer: false
        };
    }

    render() {
        const {showSideDrawer} = this.state;
        
        return(
            <Div>
                <Button
                    bg="bready"
                    hoverbg="warning700"
                    m={{b: "1rem"}}
                    rounded="circle"
                    onClick={() =>
                        this.setState({
                            showSideDrawer: true,
                        })
                    }
                >
                    Crustinis
                </Button>
                <CrustiniSideDrawer
                    isOpen={showSideDrawer}
                    onClose={() => this.setState({showSideDrawer: false })}
                />
            </Div>
        );
    }
}
export default CrustiniSide