import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Text, StyleReset, ThemeProvider} from 'atomize';
import BlogHeader from './BlogHeader'
import BlogNavBar from './BlogNavBar'

const CollegeCooking = props => {
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
                    <BlogHeader title = "College Cooking"/>
                    <BlogNavBar/>
                        <Text p = "5rem" textColor = "gray700" overflow = "auto" textSize = "subheader" fontFamily = "secondary">
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
                        night and you're three problem sets behind with a midterm tomorrow, because at the very least dinner won't be bland. 
                        </Text>
                </Div>
            </ThemeProvider>
        </StyletronProvider>
    );

}; export default CollegeCooking