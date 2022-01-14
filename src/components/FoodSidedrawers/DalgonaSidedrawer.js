import React from 'react'
import {Div, Button, SideDrawer, Text} from 'atomize'

const DalgonaSizeSidedrawer = ({isOpen, onClose}) => {
    return(
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{xs:"100vw", md:"40rem"}}>
            <Div
                d="flex"
                m={{b:"4rem"}}
            >
                <Text>
                    One tablespoon instant coffee. One tablespoon sugar. One tablespoon boiling water. Stir until your arm
                    hurts or until you get a hard peak. Then spend five minutes struggling to scoop your whip on top of your 
                    milk. And that's about it. Sometimes I put cocoa powder on top or chocolate syrup at the bottom for an extra
                    little something.
                </Text>
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

class DalgonaDrawer extends React.Component {
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
                    bg="warning600"
                    hoverbg="warning700"
                    m={{b: "1rem"}}
                    textSize={{xs:"caption", md: "body"}}
                    textWeight={{ xs: '400', md: '500' }}
                    rounded="circle"
                    onClick={() =>
                        this.setState({
                            showSideDrawer: true,
                        })
                    }
                >
                    Dalgona Coffee
                </Button>
                <DalgonaSizeSidedrawer
                    isOpen={showSideDrawer}
                    onClose={() => this.setState({showSideDrawer: false })}
                />
            </Div>
        );
    }
}
export default DalgonaDrawer