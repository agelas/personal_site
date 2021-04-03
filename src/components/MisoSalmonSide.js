import React from 'react'
import {Div, Button, SideDrawer, Text} from 'atomize'
import MisoSalmon from '../Pictures/MisoSalmon.jpg'

const MisoSalmonSideDrawer = ({isOpen, onClose}) => {
    return(
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{xs:"100vw", md:"40rem"}}>
            <Div
                d="flex"
                m={{b:"4rem"}}
                overflow = "auto"
            >
                <Text>
                    Here's a more Asian salmon recipe that's honestly probably more healthy than breaded salmon. This one
                    requires you to marinade your salmon for at least 30 minutes (although an hour or two is preferable), 
                    so be aware of that. The actual cooking part is far less involved though. 
                    <br />
                    &bull; In a bowl, mix together two tablespoons red miso, two teaspoons sugar, two tablespoons sugar, and
                    two tablespoons mirin. If you don't have mirin just use water and it'll still work out I promise.
                    <br />
                    &bull; Put your salmon inside a plastic bag, and then pour your marinade in. Swish it around a little and
                    let sit in the fridge. If you don't have a lot of time to let it marinade, use a fork and stab your salmon
                    a bunch of times. I'm sure there's a proper culinary term for this but whatever. 
                    <br />
                    &bull; Set your oven to 375. Wrap your salmon in tin foil, making sure to cover the top so the moisture doesn't
                    dissappear, and cook for around 15 minutes. Then open up the tin foil and broil for about 3 minutes. The sugar in
                    the marinade will burn quickly, so keep a careful eye on it. 
                </Text>
            </Div>
            <Div
                bgImg={MisoSalmon}
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

class MisoSalmonSide extends React.Component {
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
                    bg="salmon2"
                    hoverbg="warning700"
                    m={{b: "1rem"}}
                    rounded="circle"
                    onClick={() =>
                        this.setState({
                            showSideDrawer: true,
                        })
                    }
                >
                    Miso Salmon
                </Button>
                <MisoSalmonSideDrawer
                    isOpen={showSideDrawer}
                    onClose={() => this.setState({showSideDrawer: false })}
                />
            </Div>
        );
    }
}
export default MisoSalmonSide