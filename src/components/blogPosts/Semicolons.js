import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

import background from "./wiggle.svg";

const Semicolons = props => {
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
          black900: "1d1d1e",
          darkBg100: "#222222",
          buttonBlue: "#336699"
        }
    };

    return(
        <StyletronProvider value = {engine} debug = {debug} debugAfterHydration>
            <ThemeProvider theme = {theme}>
                <StyleReset/>
                <Div h = "55vw" w = "100vw" d = "flex" align = "center" justify = "center" bg = "darkBg100" bgImg = {background}>
                    <Div h = "25vw" w = "80vw" d =  "flex" bg = "darkBg100" align = "center" justify = "center" flexDir = "column" >
                        <Text textSize = "heading" textColor = "gray700" textWeight = "700" p = "1rem">
                            Semicolons
                        </Text> 
                        <Text p = "5rem" textColor = "gray700" overflow = "auto">
                        One of the most interesting, occasionally fun, and definitely terrifying things about learning on the spot is the mystery of whether 
                        you irreparably screwed something up. A few days ago, I got an email telling me to ssh into a server someone had set up for me and 
                        configure a web server for one of my projects. I am not a system administrator. I suppose I dubiously qualify as a fullstack web developer 
                        if you play  loose with the definition. I have developed MERN and MEAN stack web apps. That does not mean you should trust me with a chunk 
                        of your Linode server ecosystem. Yet there I was, with a react.js app and a server, and instructions that basically boiled down to 
                        "deploy the react thing on this server thing today". Fortunately Linode provides good documentation. Unfortunately half of it didn't apply 
                        to my situation. And thus began a furious StackOverflow adventure which lead to a journey down an Nginx documentation rabbithole that 
                        somehow lead to a  rereading of an old Unix textbook that eventually resulted in me screaming at my laptop because I couldn't remember 
                        how to exit a vim editor. And you know what the worst part was? I chmod'ed and chown'd all the right things. My host directories were 
                        in the right place. Nginx was installed correctly. NPM was actually working by some miracle. The react-scripts actually built the project 
                        in the right folder.  My deploy.sh bash script was right. But the website still wasn't deployed. And when I eventually managed to get an actual 
                        system administrator on a zoom call before I ripped my hair out, it took him all of five seconds to figure out what had been eluding me for over 
                        2 hours. I forgot a semicolon in a .conf file. On the one hand, this is an error I thought I shoudld've stopped making after my first computer 
                        science class in high school. On the other hand, considering how much I switch between C/C++, python, and Javascript these days, this was 
                        unsurprising. There's nothing else to really say besides that it be like that sometimes.
                        </Text>
                    </Div>
                </Div>
                <Div h="5vw" w="100vw" d="flex" bg="darkBg100" align="center" justify="center" p={{y: "1vw"}}>
                <Button
                onClick = {(e) => {
                    e.preventDefault();
                    window.location.href="/blog"
                }}
                    prefix={
                    <Icon name="LongLeft" size="20px" color="white" m={{r: "0.5rem"}}/>
                    }
                    bg="buttonBlue" rounded="circle" p={{r:"1.5rem", l: "1rem"}} shadow="3" hoverShadow="4"
                >
                    Back
                </Button>
            
            </Div>

            </ThemeProvider>
        </StyletronProvider>
    );

}; export default Semicolons