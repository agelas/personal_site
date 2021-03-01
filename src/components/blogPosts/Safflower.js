import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

import background from "./wiggle.svg";

const Safflower = props => {
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
          black900: "1d1d1e"
        }
    };

    return(
        <StyletronProvider value = {engine} debug = {debug} debugAfterHydration>
            <ThemeProvider theme = {theme}>
                <StyleReset/>
                <Div h = "55vw" w = "100vw" d = "flex" bg = "gray500" align = "center" justify = "center" bg = "white" bgImg = {background}>
                    <Div h = "25vw" w = "80vw" d =  "flex" bg = "white" align = "center" justify = "center" flexDir = "column" >
                        <Text textSize = "heading" textWeight = "700" p = "1rem">
                            Safflower Oil
                        </Text> 
                        <Text p = "5rem" overflow = "auto">
                        So one of the things about the stove tops you come across in college is that, by and far, they are electric. They’re the worst. 
                        There's a chance you're as unlucky as me and end up with exposed conductive coils, which have this nasty tendency to start 
                        smoking in spite of the amount of times I clean them. My electrical coils probably should have been replaced when I was 
                        in middle school, so there's no telling how decomposed they are. This, coupled with the fact that heat is indicated on a 1-10 
                        scale (like how hot is 7??), means that I am thoroughly unable to get an accurate gauge on how hot the stove top is. Hence, 
                        the first week back in Baltimore I was burning food left, right, and sideways. Until I stumbled across safflower oil. I do not 
                        want to go into all the reasons why everyone in the world should immediately use safflower oil as their default cooking oil. 
                        I could talk about it's beneficial ratio of unsaturated to saturated fats. I could discuss the cholesterol-lowering, inflammation-fighting, 
                        weight-losing properties. Rather, I shall focus on the fact that safflower oil has one of the highest smoking points of all cooking oils, 
                        and hence is nonpareil in its ability to prevent your kitchen from smelling like a grease fire. I can confidently say I owe so much 
                        to whoever decided to turn safflower seeds into oil. So next time when you have no clue how hot 7 is, go grab a bottle of safflower oil. 
                        </Text>
                    </Div>
                </Div>
                <Div h="5vw" w="100vw" d="flex" bg="gray200" align="center" justify="center" p={{y: "1vw"}}>
                <Button
                onClick = {(e) => {
                    e.preventDefault();
                    window.location.href="/blog"
                }}
                    prefix={
                    <Icon name="LongLeft" size="20px" color="white" m={{r: "0.5rem"}}/>
                    }
                    bg="info600" rounded="circle" p={{r:"1.5rem", l: "1rem"}} shadow="3" hoverShadow="4"
                >
                    Back
                </Button>
            
            </Div>

            </ThemeProvider>
        </StyletronProvider>
    );

}; export default Safflower