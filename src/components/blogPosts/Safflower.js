import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Text, StyleReset, ThemeProvider} from 'atomize';
import BlogHeader from './BlogHeader'
import BlogNavBar from './BlogNavBar'

const Safflower = props => {
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
            black900: "1d1d1e",
            headerBG: "#1F1F1F",
            buttonBlue: "#336699",
            blogBG: "#252525",
        }
    };

    return(
        <StyletronProvider value = {engine} debug = {debug} debugAfterHydration>
            <ThemeProvider theme = {theme}>
                <StyleReset/>
                    <Div h = "100vw" bg = "blogBG">
                    <BlogHeader title = "Safflower Oil"/>
                    <BlogNavBar/>
                        <Text p = "5rem" textColor = "gray700" overflow = "auto" textSize = "subheader" fontFamily = "secondary">
                        So one of the things about the stove tops you come across in college is that, by and far, they are electric. And electric stove tops are simply the worst. 
                        Furthermore, there is a chance that you are as unlucky as me and end up with the worst variety of electric stove- the one's with exposed conductive coils. These things possess a proclivity to start 
                        smoking no matter what, in spite of the amount of times I wash, scrub, rinse, or scour them. My electrical coils probably should have been replaced when I was 
                        in middle school, so there's no telling how toxic and decrepit they are at this point. This, coupled with the fact that the heat is indicated on a 1-10 
                        scale (like how hot is 7??), means that I am thoroughly unable to get an accurate gauge on how hot my stove is. Hence, 
                        the first week back in Baltimore I was burning food left, right, and sideways. That is, until I stumbled across safflower oil. I do not 
                        want to go into all the reasons why everyone in the world should immediately use safflower oil as their default cooking oil. Especially those with the misfortune
                        of having to deal with decades-old electric stoves. Safflower oil has one of the highest smoking points of all cooking oils, 
                        and hence it is unrivaled in its ability to prevent your kitchen from smelling like a greasy dumpster fire. I can confidently say I owe so much 
                        to the beautiful human that decided to turn safflower seeds into oil. 
                        </Text>
                    </Div>
            </ThemeProvider>
        </StyletronProvider>
    );

}; export default Safflower