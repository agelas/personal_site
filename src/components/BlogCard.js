import React, {Component} from 'react'
import {Div, Button, Text, Icon, ThemeProvider} from 'atomize'
import { render } from '@testing-library/react';

const theme = {
    textSize: {
        size: {
            customSize: "20px"
        },
         height: {
            customSize: "20px"
        }
    }
};

class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: props.title,
            date: props.date,
            postURL: props.postURL
        };
    }

    render() {

        return(
            <ThemeProvider theme = {theme}>
            <Div 
                d="flex"
                bg = "gray400"
                w = "12vw"
                h = "5vw"
                flexDir = "row"
                border = "3px solid"
                borderColor = "gray600"
                rounded = "sm"    
            >
                <Div
                    d = "flex"
                    bg = "gray400"
                    w = "3vw"
                    h = "3.5vw"
                    align = "center"
                    justify = "center"
                >
                    <Icon
                        name = "Bookmark"
                        color = "gray700"
                        size = "25px"
                    />
                    
                </Div>
                <Div
                    d = "flex"
                    bg = "gray400"
                    w = "9vw"
                    h = "4.5vw"
                    flexDir = "column"
                    align = "flex-end"
                    justify = "center"
                >
                    <Button
                        h = "3vw"
                        w = "8vw"
                        d = "flex"
                        p = "0.1rem"
                        bg = "gray400"
                        textColor = "gray800"
                        textSize = "customSize"
                        fontFamily = "code"
                        textWeight = "600"
                        textAlign = "center"
                        onClick = {(e) => {
                            e.preventDefault();
                            render();
                            window.location.href= this.state.postURL
                        }}
                    >
                        <Text>{this.state.title}</Text>
                    </Button>
                    <Div
                        h = "1.5vw"
                        w = "8vw"
                        d = "flex"
                        bg = "gray400"
                        justify = "flex-end"
                        p = "0.2rem"
                        textColor = "gray800"
                    >
                    <Text>{this.state.date}</Text>
                    
                    </Div>
                </Div>
            </Div>
            </ThemeProvider>
        );
    }
}
export default BlogCard;