import React from 'react'
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, StyleReset, ThemeProvider} from 'atomize';
import BlogHeader from './BlogHeader'

const TestBlog = props => {
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
                        <BlogHeader title="What the fuckening"/>
                    </Div>
            </ThemeProvider>
        </StyletronProvider>
    );

}; export default TestBlog