import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, Container, StyleReset, ThemeProvider} from 'atomize';
import bubbleground from '../double-bubble-outline/double-bubble-outline.png'

const About = props => {
    
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
          black900: "1d1d1e"
        }
      };  

    return(
        <StyletronProvider value = {engine} debug={debug} debugAfterHydration>
            <ThemeProvider theme={theme}>
                <StyleReset />
                    <Div
                    textColor = "black900"
                    minH="auto" //Yeah idk how to make this fill hopefully it scales
                    w="100vw"
                    d="flex"
                    flexDir="column"
                    align="flex-start"
                    textSize="display2"
                    p={{x:"1rem", y: "5rem"}}
                    bgImg = {bubbleground}
                    bgSize = "contain"
                    >
                        A Little About Me
                        <Text
                        textColor = "black600"
                        textSize = "title"
                        textAlign = "center"
                        p={{l:"3rem", r:"3rem", y:"2rem"}}
                        >
                            I grew up in the Bay Area before heading off the the East Coast to attend Johns Hopkins University.
                            I had a thing for chemistry in high school, so at first I entered as a Chemical & Biomolecular 
                            Engineering (ChemBE) major, but I soon realized that ChemBE was less chemistry and more a flavor of
                            math I wasn't a huge fan of (like no offense but solving triple integrals to find heat flux down a pipe
                            just isn't my thing). So then I ended up in Materials Science & Engineering (MSE), which was more chemistry 
                            less math and have been there ever since. Oh and I also picked up a CS minor along the way, and for some
                            reason I do a lot more CS stuff now. Probably because CS requires a computer and a lot of patience, whereas
                            MSE requres a whole lab and a lot of patience but who knows.  
                        </Text> 
                        About This Website
                        <Text
                        textColor = "black600"
                        textSize = "title"
                        textAlign = "center"
                        p={{l:"3rem", r:"3rem", y:"2rem"}}
                        >
                            Frankly, the only reason this website exists is because I got sort of put in a leadership role for
                            this research project that would need a website at some point. In other words I had a week to decide
                            between React or Angular (sorry Vue) JS. React won. And this grew out of my despereate attempt to wrap
                            my head around React during that process. I'll be the first to admit that the way I built this website
                            might be...abnormal to say the least. But there's still a lot I'm trying to learn. 
                        </Text>
                    </Div>
                    <Div
                    minH="auto" //Yeah idk how to make this fill hopefully it scales
                    w="100vw"
                    d="flex"
                    flexDir="column"
                    align="flex-start"
                    >
                        <Button 
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/personal_site"
                        }}
                        prefix={
                            <Icon
                                name="HomeSolid"
                                size="25px"
                                color="white"
                                m={{r: "0.5rem"}}
                            />
                            }
                            bg="info600"
                            rounded="circle"
                            p={{r:"1.5rem", l: "1rem"}}
                            shadow="3"
                            hoverShadow="4"
                            align="center"
                        >
                            Home
                        </Button>
                    </Div>
            </ThemeProvider>
        </StyletronProvider>
    );
}

export default About