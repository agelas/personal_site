import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Text, StyleReset, ThemeProvider} from 'atomize';
import BlogHeader from './BlogHeader'
import BlogNavBar from './BlogNavBar'

const Hello_world = props => {
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
                    <BlogHeader title = "Hello World"/>
                    <BlogNavBar/>
                        <Text p = "5rem" textColor = "gray700" textSize = "subheader" fontFamily = "secondary">
                            If I'm going to be really honest, I'm not a blogger of any sort, nor do I have any particular desire to share everything
                            about my life with everyone. But I've been told this exercise in sharing snippets of my life can be somewhat therapeutic,
                            so I'll give it a shot.
                        </Text>
                    </Div>
            </ThemeProvider>
        </StyletronProvider>
    );

}; export default Hello_world