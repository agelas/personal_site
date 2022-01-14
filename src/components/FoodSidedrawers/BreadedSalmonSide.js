import React from 'react'
import {Div, Button, SideDrawer, Text} from 'atomize'
import BreadedSalmon from '../../Pictures/BreadedSalmon.jpg'

const BreadedSalmonSideDrawer = ({isOpen, onClose}) => {
    return(
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{xs:"100vw", md:"40rem"}}>
            <Div
                d="flex"
                m={{b:"4rem"}}
                overflow = "auto"
            >
                <Text>
                    Long story short, when I got to Baltimore and the beginning of my junior year's Spring
                    semester, I found a bunch of salmon (I'm talking several pounds here) in the freezer in addition to a roommate who didn't know how
                    to cook salmon. Fortunately I sort of do. The following is based off watching my mother doing 
                    something similar back home, and works for two fillets. 
                    <br />
                    &bull; Get your salmon to something close to room temperature. Obiviously don't leave it at that temperature for too long.
                    Then, in a bowl or some variety of container, mix together a healthy dose of bread crumbs, panko (gets you the crunch), garlic
                    powder, salt (~teaspoon), pepper, and grated parmesan if you have it. I've never had difficulty
                    getting things to stick, but if you do, an egg wash will help.
                    <br />
                    &bull; After coating, throw your salmon in an oiled pan and turn up to medium heat. After one side starts 
                    to cook, flip it over and wait for the other side. 
                    <br />
                    &bull; Honestly this is probably not what you're supposed to do, but I keep flipping the salmon every
                    30 seconds or so to keep each side evenly cooked. If the salmon was actually close to room temperature
                    before you started cooking, then by the time you get a golden crust, your fish will be cooked through. 
                </Text>
            </Div>
            <Div
                bgImg={BreadedSalmon}
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

class BreadedSalmonSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideDrawer: false
        };
    }

    render() {
        const {showSideDrawer} = this.state;
        
        return(
            <Div d="flex" justify={{xs: "center", lg: "flex-start"}}>
                <Button
                    bg="salmon"
                    hoverbg="warning700"
                    m={{b: "1rem"}}
                    rounded="circle"
                    textSize={{xs:"caption", md: "body"}}
                    textWeight={{ xs: '400', md: '500' }}
                    onClick={() =>
                        this.setState({
                            showSideDrawer: true,
                        })
                    }
                >
                    Breaded Salmon
                </Button>
                <BreadedSalmonSideDrawer
                    isOpen={showSideDrawer}
                    onClose={() => this.setState({showSideDrawer: false })}
                />
            </Div>
        );
    }
}
export default BreadedSalmonSide