import React from "react"
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Text, StyleReset, ThemeProvider} from 'atomize';
import BlogHeader from './BlogHeader'
import BlogNavBar from './BlogNavBar'

const ExperienceJS = props => {
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
                    <BlogHeader title = "ExperienceJS"/>
                    <BlogNavBar/>
                        <Text p = "5rem" textColor = "gray700" overflow = "auto" textSize = "subheader" fontFamily = "secondary">
                        &emsp; I've heard experience defined as the thing you get right after you need it. I don't know who came up with that aphorism, or 
                        frankly if that even counts as an aphorism, but the truth expressed in that statement always decides to manifests itself in 
                        my life at the most inconvenient times. My latest encounter with belated experience has slowly been unravelling itself over 
                        the course of the last few months. About a year ago, one of my various projects at Hopkins required a frontend web application. 
                        At that point in time, web development was not a particular strong suit of mine. It still isn't. But now I'm much more experienced. 
                        The project I was working on (and still am working on as of the time of this writing) was large for a research project, in the 
                        sense that there were far more undergraduate students on it than one would normally see. If my memory serves me correctly, there 
                        were 35 students initially, and around 8 of them were frontend developers for the project, and those 8 fell under my purview since 
                        I had a minor management role on this project at that time. I was knowledgeable enough to know that it is easier to get a web app 
                        up and running with React compared to Angular or Vue due to React's flexibility- you can get away with a lot of things without really 
                        understanding how React works under the hood, or frankly how the DOM, html, css, etc. work either. At the same time, I was not 
                        experienced enough to understand that React's flexibility is an enormous double edged sword. The fact that there are multiple 
                        ways to create components via classes or functions, dozens of ways to throw CSS around, and a litany of ways to update a 
                        component's state  means that it's pretty easy to find shortcuts around problems. This is great for personal projects and quickly 
                        prototyping web apps, but not so great for building a durable project with lots of developers. Every developer has their own 
                        way of coding, and since React (which is already designed to let you do-whatever-you-want-however-you-want) is a JavaScript 
                        (perhaps the most do-whatever-you-want programming language out there) library, things can get out of hand very quickly. No 
                        matter how many times coding standards or guidelines are presented to developers, inevitably those standards fall apart over 
                        time and inconsistencies in coding style find ways to infiltrate every corner of the project. Those inconsistencies turn into 
                        complexities, and ultimately make the project a nightmare to work on and refactor. 
                        <br />
                        <br />
                        &emsp; Speaking of refactoring, I'm also not a huge fan of how major updates to React force everyone to go back and change massive 
                        amounts of previous code. Like how with v16.8, hooks and functional components essentially became the new norm. I suppose 
                        technically nobody *had* to refactor, but the writing was on the wall, and it's pretty clear that hooks are the direction React 
                        is going. Which leads to yet another annoying thing with React, which is that you frequently need a lot of other libraries 
                        layered on top of React to make your web apps function as desired. And not all those libraries are compatible with new React 
                        updates. So the never ending game of dependency Jenga endemic to all web apps only becomes ever more arduous.
                        <br />
                        <br />
                        &emsp; Picking the right tools and frameworks for the each project is half the battle with most things computer science. Knowing 
                        how to pick correctly takes experience. Unfortunately that experience comes at the price of the self-commiserating misery 
                        brought on by trying to figure out what 'best practice' actually means in React. Such is life I suppose.
                        </Text>
                </Div>
            </ThemeProvider>
        </StyletronProvider>
    );

}; export default ExperienceJS