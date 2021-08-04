import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Text, StyleReset, ThemeProvider} from 'atomize';
import BlogHeader from './BlogHeader'
import BlogNavBar from './BlogNavBar'
import BlogFooter from "./BlogFooter"

const Zoom2 = props => {
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
                <Div h = "100vh" bg = "blogBG">
                    <BlogHeader title = "Zoom University Part 2"/>
                    <BlogNavBar/>
                        <Text p = "5rem" textColor = "gray700" overflow = "auto" textSize = "subheader" fontFamily = "secondary">
                        If you've read part 1, then you know the general feeling of malaise I have towards online schooling. But it wasn't 
                        all bad. There were some good parts. Primarily, I did appreciate the time I was able to spend with my parents. I 
                        know that college is usually viewed as a time to spread one's wings and chart their own path in the world- independent 
                        of one's parental unit. However, I will say I did enjoy their company. Having spent approximately two years away from 
                        them did make me appreciate the time together more. And I'm sure they appreciated the chance to somewhat relive their 
                        college days vicariously through me. My father was a frequent visitor to my room during computer science classes, and 
                        my mother a constant spectator to my struggles with difficult problem sets. Before leaving for Baltimore, I found it 
                        interesting how I felt like a freshman all over again, despite being halfway through my junior year already. I guess the 
                        comforts of home quickly become difficult to give up. 
                        </Text>
                        <Div pos = "absolute" bottom = "0">
                            <BlogFooter/>
                        </Div>
                </Div>
            </ThemeProvider>
        </StyletronProvider>
    );

}; export default Zoom2