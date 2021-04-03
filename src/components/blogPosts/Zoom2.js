import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

import background from "./wiggle.svg";

const Zoom2 = props => {
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
                <Div h = "60vw" w = "100vw" d = "flex" align = "center" justify = "center" bg = "darkBg100" bgImg = {background}>
                    <Div h = "25vw" w = "80vw" d =  "flex" bg = "darkBg100" align = "center" justify = "center" flexDir = "column" >
                        <Text textSize = "heading" textColor = "gray700" textWeight = "700" p = "1rem">
                            Zoom University Pt 2
                        </Text> 
                        <Text p = "5rem" textColor = "gray700" overflow = "auto">
                        If you've read part 1, then you know the general feeling of malaise I have towards online schooling. But it wasn't 
                        all bad. There were some good parts. Primarily, I did appreciate the time I was able to spend with my parents. I 
                        know that college is usually viewed as a time to spread one's wings and chart their own path in the world- independent 
                        of one's parental unit. However, I will say I did enjoy their company. Having spent approximately two years away from 
                        them did make me appreciate the time together more. And I'm sure they appreciated the chance to somewhat relive their 
                        college days vicariously through me. My father was a frequent visitor to my room during computer science classes, and 
                        my mother a constant spectator to my struggles with difficult problem sets. Before leaving for Baltimore, I found it 
                        interesting how I felt like a freshman all over again, despite being halfway through my junior year already. I guess the 
                        comforts of home never really do leave you. 
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

}; export default Zoom2