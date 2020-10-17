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
                    {/*Div for transition to blog part*/}
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
                        Rambles
                        </Text>
                    </Div>
                    <Row
                        h="50vw" //This will control vertically the start of your ramblings
                        w="70vw"
                        d="flex"
                        justify="center"
                        align="center"
                        bg="white"
                    >
                        <Col
                            size="10" //I have no clue where size comes from tbh
                            h="15vw"
                            bg="gray300"
                            d="flex"
                            flexDir="column"
                            overflow="visible scroll"
                            rounded="xl"
                        >
                            <Text
                              textSize = "title"
                                textWeight = "500"
                            >
                                As cross as two branches 
                            </Text>
                            <Text>
                                I'll admit it. I don't like saying I don't know something, while at the same time I also have no issue 
                                getting mad at people for doing the exact same thing. Case in point, that software project I'm working
                                on for modeling COVID-19 spread is comprised mostly of JHU undergrads. Most if not all of them have taken
                                a class called Intermediate Programming, which is the first place many of these people are introduced to 
                                git. It's good to get the exposure early on, but unfortunately that exposure takes the 
                                form of 'git add', 'git commit', and 'git push'. And that's about it. And apparently some people think
                                that's enough to qualify them to say that they are 'experienced' with git. So when I asked people at the
                                beginning of this semester if they were comfortable with branching so that we can have parallel lines of
                                software development across the 45 people in 11 different timezones, basically everyone was said they were.
                                I'm sure you can guess where this is going. I can't even count the amount of times I've walked people through
                                stashing their workspaces or rebasing their commits or how to simply switch branches. I honestly never would
                                have guessed that managing a software project would require so much hands-on supervision and hand-holding. 
                            </Text>
                            <Text
                                textSize = "title"
                                textWeight = "500"
                            >
                                Flashbacks and like not the good kind
                            </Text>
                            <Text>
                                Apparently my parents were right and it's a small world. As I was leaving CharMar the other day I saw a
                                face from my high school speech & debate career that I thought I'd never see again. He competed for my
                                high school's rival and was apparently one heck of a speaker. This was according to my coach, who for some
                                reason thought he was the gold standard for the new type of speech and debaters she was trying to create
                                the year before she retired to go make jewelry. Not to brag but like the one time we went head-to-head at
                                a speech event I came out ranked higher. But anyways, Johns Hopkins was hosting some college debate event
                                and there this guy was just waiting for an Uber at the bottom of the beach (this giant grass oval at
                                JHU that looks nothing like a beach but is called so anyways) with a bunch of speech and debate people. 
                                I guess I never really thought anyone from my part of the high school speech and debate world would want to
                                keep doing it in college. Besides the people who were quite literally obsessed with arguing, literally 
                                everyone I knew was not having a good time. This was partly because we as high schoolers put an excessive
                                amount of pressure on ourselves to do well for the sake of college, partly because we were in the most 
                                competitive league in the country, partly because every school expected wins from their students. Perfect 
                                combination.    
                            </Text>
                            
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