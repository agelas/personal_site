import React, {Component} from 'react'
import {Div, Button, SideDrawer, Text} from 'atomize'
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';

const BrieSizeSidedrawer = ({isOpen, onClose}) => {
    return(
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{xs:"100vw", md:"40rem"}}>
            <Div
                d="flex"
                m={{b:"4rem"}}
            >
                <Text>
                    Ok I don't know why but baked bries always seem to be the go-to dish college students like me at
                    Johns Hopkins attempt to make when we have the time to try adulting and/or hosting brunch pre-corona.
                    The reason is probably because these things are easy to make, share, and decorate. Back in Baltimore, we                   
                    would literally buy a brie, cover the top in fig jam and strawberry jam (any fruit jam that's sweet will work),
                    sprinkle a handful of brown sugar on top, and wrap the whole thing in a puff pastry before sticking it in
                    the oven at 375 degrees Fahrenheit for 15 minutes. As I later found out when I got back home, one of 
                    the problems with this is that different bries have wildly different responses to getting baked. The brand
                    I had back in Baltimore kept pretty upright for some reason, but the brie I got from a nearby Whole Foods
                    in back home just completely melted. So instead of a baked brie I ended up with a baked puddle of melted 
                    cheese. Pretty dissapointing. I got around this by cutting up my bries into smaller chunks, slathering the 
                    same ingredients on, and wrapping them in smaller puff pastry sheets so that the whole conoction would 
                    fit inside a cupcake mold. So now if the brie completely melts, it won't leak out the side because the 
                    shape is held up by your mold. As an added bonus not everyone is taking bites out of the same thing which
                    is probably better these days.   
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

class BrieDrawer extends React.Component {
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
                    bg="success800"
                    hoverbg="sucess900"
                    rounded="circle"
                    m={{b: "1rem"}}
                    onClick={() =>
                        this.setState({
                            showSideDrawer: true,
                        })
                    }
                >
                    Baked Bries
                </Button>
                <BrieSizeSidedrawer
                    isOpen={showSideDrawer}
                    onClose={() => this.setState({showSideDrawer: false })}
                />
            </Div>
        );
    }
}
export default BrieDrawer