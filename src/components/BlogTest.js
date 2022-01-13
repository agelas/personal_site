import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Row, Col, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';
import bubbleground from '../double-bubble-outline/dark-honeycomb.png'
import devance from '../Pictures/spauldevance.JPG'
import antibes from '../Pictures/antibes.jpg'
import frenchCoffee from '../Pictures/frenchCoffee.jpg'
import HOMLModal from './HOMLModal'
import REModal from './REModal'
import MLPPModal from './MLPPModal'
import TemModal from './TemeraireModal'
import LevModal from './LeviathanModal'
import BrieDrawer from './FoodSidedrawers/BakedBrieSidedrawer'
import DalgonaDrawer from './FoodSidedrawers/DalgonaSidedrawer'
import BreadedSalmonSide from './FoodSidedrawers/BreadedSalmonSide'
import MisoSalmon from './FoodSidedrawers/MisoSalmonSide'
import CrustiniSide from './FoodSidedrawers/CrustiniSide'
import BlogCard from './BlogCard'

//For future reference remember that user-defined components like the one's being imported above must be capitalized in JSX

const BlogTest = props => {
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
          black900: "1d1d1e",
          darkBg100: "#222222",
          buttonBlue: "#336699",
          salmon: "#FFB4A2",
          salmon2: "#CB997E",
          bready: '#BC6C25'
        }
    };
      
    return(
        <StyletronProvider value = {engine} debug={debug} debugAfterHydration>
            <ThemeProvider theme={theme}>
                <StyleReset />
                <Div
                    //h="200vw" //This controls the height of the whole page basically
                    //w="100vw"
                    d="flex"
                    flexDir={{xs: "column", lg: "column"}}
                    align="center"
                    justify = "center"
                    p={{x:"1rem", y: "5rem"}} //The y padding shifts row grid item down
                    bgImg = {bubbleground}
                    bgSize = "auto" //This made it seem to work a lot better
                    bgRepeat = "repeat"
                    >
                    <Row
                        h="auto" //This will control vertically the start of your ramblings
                        w="70vw"
                        d="flex"
                        bg="darkBg100"
                        flexDir= {{xs: "column", lg: "row"}}
                        align = {{xs: "center"}}
                    >
                        <Col
                            h={{lg: "50vw"}}
                            w={{lg: "15vw"}}
                            d="flex"
                            bg="darkBg100"
                            justify= "center"
                            align="center"
                        >
                            <Text
                                d="flex"
                                bg="darkBg100"
                                
                                textColor="gray700"
                                textSize={{xs: "paragraph", lg: "display1"}}
                                textAlign="center"
                                align="center"
                                justify="center"
                            >
                            Find here a collection of my personal anecdotes, random musings, food recipes, vacation pictures, 
                            and unnecessary rants about the things happening in my life.
                         
                            </Text>
                        </Col>
                        <Col
                            h={{lg: "50vw"}}
                            w={{lg: "15vw"}}
                        >
                            <Div
                                d={{xs: "none", lg: "flex"}}
                                bgImg={devance}
                                bgSize={{lg: "cover"}}
                                h={{xs:"30vw", lg:"50vw"}}
                            >
                            
                            </Div>
                        </Col>
                    </Row>
                    <Row
                        h="auto"
                        w="70vw"
                        p="1rem"
                        d="flex"
                        
                    >
                        <Div
                        h="10vw"
                        w="70vw"
                        d="flex"
                        bg="sucess100"
                        align="center"
                        justify="center"
                        >
                            <Text
                                textSize= {{cs: "subheader", lg: "heading"}}
                                textDecor="overline"
                                textWeight="500"
                                textColor="gray700"
                            >
                            Books
                            </Text>
                        </Div>
                    
                    </Row>
                    <Row
                        h="auto"
                        w="70vw"
                        d="flex"
                        bg="white"
                    >
                        <Col
                            d={{xs: "none", lg: "flex"}}
                            h="50vw"
                            w="15vw"
                            bgImg={antibes}
                            bgSize = {{xs: "contain", lg: "cover"}}
                        >
                            
                        </Col>
                        <Col
                            h="auto"
                            w="15vw"
                            d="flex"
                            bg="darkBg100"
                            justify= {{xs:"center", lg: "top"}} //idk why but this seems to affect vertical positioning 
                            align="center" //and this horizontal positioning
                            flexDir="column"
                        >
                            <Div
                                h="auto"
                                w={{xs: "70vw", lg: "30vw"}}
                                d="flex"
                                bg="darkBg100"
                                textAlign="center"
                                p={{lg: "2vw"}}
                            >
                                <Text
                                    //d="flex"
                                    bg="darkBg100"
                                    textColor="gray700"
                                    textSize={{xs: "caption", lg: "subheader"}}
                                    textAlign= {{lg: "center"}}
                                    align="center"
                                    justify="center"
                                >
                                I like to consider myself a fairly avid reader. While I used to spend most of my time buried in works of fiction,
                                these days most of my reading material comprises of academic journals and how-to books that deal
                                with CS stuff.
                                </Text>
                            </Div>
                            
                            <Div
                                h="auto"
                                w={{xs: "70vw", lg: "30vw"}}
                                bg="sucess100"
                                align = {{xs:"center"}}
                            >
                                <HOMLModal/> 
                                <REModal/> 
                                <MLPPModal/>
                                <TemModal/>
                                <LevModal/>
                            </Div>
                            
                        </Col>
                    </Row>
                    <Row
                        h="auto"
                        w="70vw"
                        p="1vw"
                        d="flex"
                        bg="darkBg100"
                        flexDir= {{xs: "column", lg: "row"}}
                        align = {{xs: "center"}}
                        justify = {{lg: "center"}}
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
                        bg="buttonBlue"
                        rounded="circle"
                        p={{r:"1.5rem", l: "1rem"}}
                        shadow="3"
                        hoverShadow="4"
                    >
                        Home 
                    </Button>
                    </Row>
                </Div>
            </ThemeProvider>       
        </StyletronProvider>
    )
};

export default BlogTest