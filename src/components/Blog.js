import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Row, Col, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';
import bubbleground from '../double-bubble-outline/double-bubble-outline.png'
import devance from '../Pictures/spauldevance.JPG'
import antibes from '../Pictures/antibes.jpg'
import frenchCoffee from '../Pictures/frenchCoffee.jpg'
import HOMLModal from './HOMLModal'
import REModal from './REModal'
import MLPPModal from './MLPPModal'
import TemModal from './TemeraireModal'
import LevModal from './LeviathanModal'
import BrieDrawer from './BakedBrieSidedrawer'
import DalgonaDrawer from './DalgonaSidedrawer'

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
                    h="200vw" //This controls the height of the whole page basically
                    w="100vw"
                    d="flex"
                    flexDir="column"
                    align="center"
                    p={{x:"1rem", y: "5rem"}} //The y padding shifts row grid item down
                    bgImg = {bubbleground}
                    bgSize = "auto" //This made it seem to work a lot better
                    bgRepeat = "repeat"
                    >
                    <Row
                        h="50vw" //This will control vertically the start of your ramblings
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
                                pos="static"
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
                    {/*Division for transition to book section*/}
                    <Div
                        h="20vw"
                        w="70vw"
                        d="flex"
                        bg="sucess100"
                        align="center"
                        justify="center"
                    >
                        <Text
                            textSize="heading"
                            textDecor="overline"
                            textWeight="500"
                            textColor="black300"
                        >
                        Books
                        </Text>
                
                    </Div>
                    {/*Row which holds actual book musing type things*/}
                    <Row
                        h="50vw"
                        w="70vw"
                        d="flex"
                        bg="white"
                    >
                        <Col
                            h="50vw"
                            w="15vw"
                            bgImg={antibes}
                            bgSize="cover"
                        >
                            
                        </Col>
                        <Col
                            h="50vw"
                            w="15vw"
                            d="flex"
                            bg="sucess100"
                            justify= "top" //idk why but this seems to affect vertical positioning 
                            align="center" //and this horizontal positioning
                            flexDir="column"
                        >
                            <Div
                                h="15vw"
                                w="30vw"
                                d="flex"
                                bg="sucess100"
                                pos="static"
                                textColor="black100"
                                textSize="subheader"
                                textAlign="center"
                                p="2vw"
                            >
                            I like to consider myself a fairly avid reader. While I used to spend most of my time buried in works of fiction,
                            these days most of my reading material comprises of academic journals and how-to books that deal
                            with CS stuff.
                            </Div>
                            <Div
                                h="15vw"
                                w="30vw"
                                bg="sucess100"
                            >
                                <HOMLModal/> 
                                <REModal/> 
                                <MLPPModal/>
                                <TemModal/>
                                <LevModal/>
                            </Div>
                            
                        </Col>
                    </Row>
                    {/*Division for transition to food section*/}
                    <Div
                        h="20vw"
                        w="70vw"
                        d="flex"
                        bg="sucess100"
                        align="center"
                        justify="center"
                    >
                        <Text
                            textSize="heading"
                            textDecor="overline"
                            textWeight="500"
                            textColor="black300"
                        >
                        Food
                        </Text>
                    </Div>
                    <Row
                        h="50vw" //This will control vertically the start of your ramblings
                        w="70vw"
                        d="flex"
                        bg="white"
                    >
                        <Col
                            h="50vw"
                            w="15vw"
                            d="flex"
                            bg="sucess100"
                            align="center"
                            flexDir="column" //flexDir to column is the trick to get this up top
                        >
                            <Div
                                h="15vw"
                                w="30vw"
                                d="flex"
                                bg="sucess100"
                                pos="static"
                                textColor="black100"
                                textSize="subheader"
                                textAlign="center"
                                p="2vw"
                            >
                                By no means am I a chef, but I'd like to think that I can hold my own in a kitchen if the need arises.
                             </Div>
                             <Div
                                h="15vw"
                                w="30vw"
                                bg="sucess100"
                             >
                                <DalgonaDrawer/>
                                <BrieDrawer/>
                             </Div>
                        </Col>
                        <Col
                            h="50vw"
                            w="15vw"
                            bgImg={frenchCoffee}
                            bgSize="cover"
                        >
                        
                        </Col>
                    </Row>
                </Div>
            
                <Div
                    h="5vw"
                    w="100vw"
                    d="flex"
                    bg="gray200"
                    align="center"
                    justify="center"
                    p={{y: "1vw"}}
                >
                    <Button
                    onClick = {(e) =>{
                        e.preventDefault();
                        window.location.href="/"
                    }}
                        prefix={
                        <Icon
                            name="HomeSolid"
                            size="20px"
                            color="white"
                            m={{r: "0.5rem"}}
                        />
                        }
                        bg="info600"
                        rounded="circle"
                        p={{r:"1.5rem", l: "1rem"}}
                        shadow="3"
                        hoverShadow="4"
                    >
                        Home 
                    </Button>
                
                </Div>
            </ThemeProvider>       
        </StyletronProvider>
    )
};

export default Blog