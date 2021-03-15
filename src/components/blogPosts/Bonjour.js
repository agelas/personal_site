import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

import background from "./wiggle.svg";

const Bonjour = props => {
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
                        <Text textSize = "heading" textWeight = "700" textColor = "white" p = "1rem">
                            Bonjour
                        </Text> 
                        <Text p = "5rem" overflow = "auto" textColor = "white">
                            So I recently started learning French at Hopkins for two reasons. First, language classes get me more credits than a 
                            normal humanities class- and I need to fulfill my distribution requirements. Second, I enjoy visiting France and I figured
                            it might be helpful to have a grasp of the language so I'm not confined to the super tourist-y areas. The last time I was
                            in France was just under a year ago for winter break when I went to Nice before covid became a thing. Winter and Nice aren't
                            exactly a famous combo, but I have to say the lack of other tourists made for a really enjoyable time since there were limited
                            crowds. And apparently that winter was much milder than usual, so it didn't rain as much as it usually does. Anyways, while
                            there, I was actually pretty impressed with my ability to figure out a decent amount of French by stitching together parts of
                            Spanish and English. A lot of French verbs are pretty similar to their Spanish counterparts, and then some English nouns 
                            are pretty flagrantly stolen from French. Anyways, this gave me the impression that French shouldn't be that hard to learn.
                            I would just like to say that impression was false. In high school, my Spanish teacher talked about how she tried to learn French
                            in college, and that didn't go well. Now I understand why. In English and Spanish, if you're going to go through the trouble of
                            conjugating a verb, you at least do that verb the honor of pronouncing the conjugation. In French, not so much. And words that
                            end in -s or -t? Sometimes you pronounce it, sometimes not. Like usually you would ignore the t in "fait", unless you're
                            using it in the expression "en fait", for example. Like who came up with that rule? And don't even get me started on the number system. 
                            Sometimes it's base 10 like everywhere else, but then sometimes it becomes base 20. Which is why ninety-one in French comes
                            out to be four-twenty-eleven. So it really looks like this language is a bunch of exceptions to some set of loosely defined rules.
                            And I have two semester of this. At least French sounds nice when you get the pronounciation right.  
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

}; export default Bonjour