import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

import background from "./wiggle.svg";

const Zoom1 = props => {
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
                            Zoom University Pt 1
                        </Text> 
                        <Text p = "5rem" overflow = "auto">
                            It's officially been a full semester of Zoom University and  it was rough. 
                            The semester wasn't all bad, but bear with me as I heap significant amounts 
                            of opprobrium upon my fall 2020 semester. I would first like to make a remark
                            regarding the timing of my classes. Let me begin by saying that I understand
                            that attending classes synchronously may improve student engagement/understanding
                            of material. That is a claim that has been frequently referenced in the syllabi 
                            of many a professor before the start of this semester. And I do accept it- except 
                            in the cases where professors are simply reading off powerpoint slides. 
                            I had three different classes that asked for synchronous participation, yet I cannot
                            count a single time when the class required active participation. If I have questions
                            about moving registers in assembly or trying to figure out multi-threading or the
                            kinetics of Ostwald ripening, an email or piazza post surely would suffice. I find
                            it difficult to believe that I have to wake up at 5:30am in the morning on Monday, Wednesday,
                            and Friday to ask these questions, especially given the fact that my brain is hardly awake enough 
                            to piece together such a query. The only class where my synchronous participation was necessary 
                            was French. As with all new languages one tries to learn, listening to a native speaker 
                            is almost necessary in order to achieve a semblance of understanding. There is a significant 
                            amount of understanding and, neurologists/psychiatrists forgive me if this is the wrong phrasing, 
                            interaction with one's universal grammar faculties, that occurs when one participates in real-time 
                            candid conversation. So my French class I was more than willing to bite the bullet and wake up for. 
                            The second thing that made fall semester almost insufferable was Zoom fatigue. By the time 
                            January rolled around, I felt like my eyes were close to melting. I was at the point where 
                            the energy required to send an email was physically draining, much less having to sit 
                            through hours long lectures. Staring at a computer screen from 6am to 1pm physically hurts. 
                            And let's not forget how lonely the semester was. I am fortunate to live by some close friends, 
                            with whom I could make unsolicited visits nearly any hour of the day. I can't recall how many 
                            spontaneous socially-distanced hikes around the Stanford dish trail or Shoreline happened, but 
                            even then, it was difficult to emulate the full breadth of social interactions I was accustomed 
                            to at Johns Hopkins pre-pandemic. This semester has taken a toll on everyone, both physically 
                            and mentally. I know that's not particularly insightful, but I just needed to say it.   
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

}; export default Zoom1