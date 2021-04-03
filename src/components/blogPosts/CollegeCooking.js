import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, StyleReset, ThemeProvider} from 'atomize';

import background from "./wiggle.svg";

const CollegeCooking = props => {
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
                        My experience with college cooking boils down to not having enough space, not having enough time, and not 
                        having enough cookware. I don't know who designed my apartment, but all the counter space seems to have 
                        gone to the bathrooms. So while I can comfortably sprawl out all my toothbrushes, towels, towelettes, soap, 
                        floss, skincare products, and other amenities across a bathroom counter the size of Texas, in the kitchen I 
                        struggle to cram more than a single cutting board on my meager excuse of a kitchen counter. This, coupled 
                        with the lack of time afforded to me by my 20-ish credit course load, means that I get maybe an hour and a 
                        half per day in the kitchen to do any serious cooking. So speed and multitasking are really the name of the 
                        game. For any non-chefs reading this, salt, pepper, garlic powder, and some combination of basil/thyme/oregano 
                        will do miracles for convincing your friends you can do more than reheat leftover Chipotle. If you're like 
                        me and need to occasionally cook something that resembles Asian cuisine, soy sauce (obviously), ginger, and 
                        sesame oil are huge for getting those flavors that remind you of home. Another thing I wished I picked up 
                        on earlier was getting in the habit of marinating meats. Like I mentioned before, I usually don't have huge 
                        amounts of time to be waiting around for my food to absorb flavors. So if you throw your chicken or pork or 
                        whatever in various marinades on the weekend and shove it in the freezer, you'll thank yourself come Wednesday 
                        night and you're three problem sets behind with a midterm tomorrow, because at least dinner won't be bland. 
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

}; export default CollegeCooking