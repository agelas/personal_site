import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

const Hello_world = props => {
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
                <Div h = "40vw" w = "100vw" d = "flex" bg = "gray500" align = "center" justify = "center">
                    <Div h = "20vw" w = "80vw" d =  "flex" bg = "white" align = "center" justify = "center" flexDir = "column">
                        <Text textSize = "heading" textWeight = "700">
                            Hello World
                        </Text> 
                        <Text p = "5rem">
                            If I'm going to be really honest, I'm not a blogger of any sort, nor do I have any particular desire to share everything
                            about my life with everyone. But I've been told this exercise in sharing snippets of my life can be somewhat therapeutic,
                            so I'll give it a shot.
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

}; export default Hello_world