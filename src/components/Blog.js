import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Row, Col, Button, Icon, Text, StyleReset, ThemeProvider, Container} from 'atomize';
import { Link } from "react-router-dom"
import bubbleground from '../double-bubble-outline/double-bubble-outline.png'
import devance from '../Pictures/spauldevance.JPG'

const Blog = props => {
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
                    h="70vw"
                    w="100vw"
                    d="flex"
                    flexDir="column"
                    align="center"
                    p={{x:"1rem", y: "5rem"}}
                    bgImg = {bubbleground}
                    bgSize = "auto" //This made it seem to work a lot better
                    bgRepeat = "repeat"
                    >
                    <Row
                        h="60vw"
                        w="70vw"
                        d="flex"
                        bg="white"
                    >
                        <Col
                            h="50vw"
                            w="15vw"
                            d="flex"
                            bg="sucess100"
                            justify= "center"
                            align="center"
                        >
                            <Text
                                h="30vw"
                                w="20vw"
                                d="flex"
                                bg="sucess100"
                                pos="fixed"
                                top="25%"
                                textColor="black100"
                                textSize="display1"
                                textAlign="center"
                                align="center"
                                justify="center"
                            >
                            Find here a collection of my personal anecdotes, random musings, food recipes, vacation pictures, 
                            and unnecessary rants about the things happening in my life.
                         
                            </Text>
                        </Col>
                        <Col
                            h="50vw"
                            w="15vw"
                            bgImg={devance}
                            bgSize="cover"
                        >
                        
                        </Col>
                    
                    </Row>
                </Div>
            </ThemeProvider>       
        </StyletronProvider>
    )
};

export default Blog