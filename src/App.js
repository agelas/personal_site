import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, Container, StyleReset, ThemeProvider} from 'atomize';
import NotFound from './components/NotFound'
import About from './components/About'
import bubbleground from './double-bubble-outline/double-bubble-outline.png'
/*Background image from Toptal Subtle Patterns*/

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
//Create a client engine instance
const engine = new Styletron();

const theme = {
  colors: {
    black900: "1d1d1e"
  },
  grid: {
    gutterWidth: "5rem"
  }
};  

class App extends Component {
  render() {
    return(
      <StyletronProvider value = {engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
            <Router>
              <Switch>
                <Route exact path="/">
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
                  <Container
                    w="100rem"
                    d="flex"
                    flexDir="column"
                    align="center"
                    bg = "sucess100"
                    minH = "10rem"
                  >
                  {
                    //The row is where the three panels with the links are being held. The row has
                    //three columns, each column holds a div, and embedded in the div is the button
                    <Row d = "flex" flexDir = "row" justify = "space-between">
                        <Col size="4" bg = "sucess100" p="4rem">
                          <Div 
                            d="flex"
                            p="1rem" 
                            bg = "success100" 
                            hoverBg = "gray500"
                            rounded = "md" 
                            minW = "8rem" 
                            minH = "10rem"
                            align="center"
                            shadow="5"
                            border="3px solid"
                            borderColor="gray400"
                          >
                            <Button 
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href="/About"
                              
                            }}
                            prefix={
                              <Icon
                                name="Loading2"
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
                            About
                          </Button> 
                          </Div>
                        </Col>
                        <Col size="4" bg = "sucess100" p="4rem">
                          <Div 
                            d = "flex"
                            p="1rem" 
                            bg = "success100" 
                            hoverBg = "gray500"
                            rounded = "md" 
                            minW = "8rem" 
                            minH = "10rem"
                            align="center"
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
                        <Col size="4" bg = "sucess100" p="4rem">
                          <Div 
                            d = "flex"
                            p="1rem"
                            bg = "sucess100" 
                            hoverBg = "gray500"
                            rounded = "md" 
                            minW = "8rem" 
                            minH = "10rem" 
                            align = "center"
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
                            >
                              LinkedIn
                            </Button>
                          </Div>
                        </Col>
                    </Row>
                  }
                  </Container>
                </Route>
                <Route path="/About" component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </Router>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}
export default App;
