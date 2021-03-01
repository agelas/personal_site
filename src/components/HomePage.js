import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, StyleReset, ThemeProvider} from 'atomize';
import bubbleground from '../double-bubble-outline/double-bubble-outline.png'
import AboutModal from './AboutModal';
import NotFound from './NotFound'
import Blog from './Blog'
import Hello_world from './blogPosts/Hello-world'
import Bonjour from './blogPosts/Bonjour'
import Zoom1 from './blogPosts/Zoom1'
import Zoom2 from './blogPosts/Zoom2'
import Safflower from './blogPosts/Safflower'

const HomePage = (props) => {
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colCount: 4,
        colors: {
          black900: "1d1d1e",
          purple700: "#6F5CC3",
          purple800: "#553EB5"
        }
      }; 
    
    return(
        <StyletronProvider value = {engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
            <Router>
                <Switch>
                    <Route exact path = "/">
                        <Div
                        textColor = "black900"
                        minH="35vh"
                        w="100vw"
                        d="flex"
                        flexDir="column"
                        align="center"
                        textSize="display3"
                        p={{x:"1rem", y: "10rem"}}
                        bgImg = {bubbleground}
                        bgSize = "contain"
                        >
                        Hi, my name's Mathias 
                        <Text
                            d = "flex"
                            textSize = "heading"
                            m = "3rem"
                            w = "70rem"
                            textAlign = "center"
                            hoverTextColor="info700"
                        >
                        I'm a student at the Johns Hopkins University studying Materials Science & Engineering
                        and Computer Science.
                        </Text>
                        </Div>
                        <Div
                        w="100vw"
                        d="flex"
                        flexDir="column"
                        align="center"
                        bg = "sucess100" 
                        minH = "10rem"
                        >
                        
                        {/*The row is where the three panels with the links are being held. The row has
                        three columns, each column holds a div, and embedded in the div is the button*/}
                        <Row d = "flex" flexDir = "row" justify = "space-between">
                            <Col d = "flex" size="3" bg = "sucess100" p="4rem" align = "center">
                                <Div 
                                d="flex"
                                p="1rem" 
                                bg = "success100" 
                                hoverBg = "gray500"
                                rounded = "md" 
                                minW = "8rem" 
                                minH = "10rem"
                                align ="center"
                                justify = "center"
                                shadow="5"
                                border="3px solid"
                                borderColor="gray400"
                                >
                                <AboutModal/>
                                </Div>
                            </Col>
                            <Col d = "flex" size="3" bg = "sucess100" p="4rem" align = "center">
                                <Div 
                                d = "flex"
                                p="1rem" 
                                bg = "success100" 
                                hoverBg = "gray500"
                                rounded = "md" 
                                minW = "8rem" 
                                minH = "10rem"
                                align="center"
                                justify = "center"
                                shadow="5"
                                border="3px solid"
                                borderColor="gray400"
                                >
                                <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href="https://github.com/agelas"
                                }}
                                prefix={
                                    <Icon
                                    name="Github"
                                    size="30px"
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
                                    Github
                                </Button> 
                                </Div>
                            </Col>
                            <Col d = "flex" size="3" bg = "sucess100" p="4rem" align = "center">
                                <Div 
                                d = "flex"
                                p="1rem"
                                bg = "sucess100" 
                                hoverBg = "gray500"
                                rounded = "md" 
                                minW = "8rem" 
                                minH = "10rem" 
                                align = "center"
                                justify = "center"
                                shadow="5"
                                border="3px solid"
                                borderColor="gray400"
                                >
                                <Button
                                onClick = {(e) =>{
                                    e.preventDefault();
                                    window.location.href="https://www.linkedin.com/in/mathias-insley/"
                                }}
                                    prefix={
                                    <Icon
                                        name="Linkedin"
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
                                    d="flex"
                                    align = "center"
                                >
                                    LinkedIn
                                </Button>
                                </Div>
                            </Col>
                            <Col d = "flex" size="3" bg = "sucess100" p="4rem" align = "center">
                                <Div 
                                d="flex"
                                p="1rem" 
                                bg = "success100" 
                                hoverBg = "gray500"
                                rounded = "md" 
                                minW = "9.5rem" 
                                minH = "10rem"
                                align = "center"
                                justify = "center"
                                shadow="5"
                                border="3px solid"
                                borderColor="gray400"
                                >
                                <Button
                                onClick = {(e) =>{
                                    e.preventDefault();
                                    window.location.href="/blog"
                                }}
                                    prefix={
                                    <Icon
                                        name="Rename"
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
                                    Blog 
                                </Button>
                                </Div>
                            </Col>
                        </Row>
                        </Div>
                        </Route>
                        <Route path="/blog" exact component={Blog}/>
                        <Route path="/Hello_world" exact component={Hello_world}/>
                        <Route path="/Bonjour" exact component={Bonjour}/>
                        <Route path="/Zoom1" exact component={Zoom1}/>
                        <Route path="/Zoom2" exact component={Zoom2}/>
                        <Route path="/Safflower" exact component={Safflower}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
        </ThemeProvider>
      </StyletronProvider>
    );
}

export default HomePage