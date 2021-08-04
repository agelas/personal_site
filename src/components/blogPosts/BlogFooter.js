import React from "react"
import {Row, Col, Button, Icon} from 'atomize';

function BlogFooter() {
    return(
       
        <Row w = "100vw">
            <Col size = "12" d = "flex" h = "4vw" align = "center" justify = "center" bg = "headerBG">
                <Button
                onClick = {(e) => {
                    e.preventDefault();
                    window.location.href="/blog"
                }}
                prefix = {
                    <Icon 
                        name="LongLeft"
                        size = "20px" 
                        color = "white"
                        m = {{r: "0.5rem"}}/>
                }
                bg = "buttonBlue" 
                rounded = "circle" 
                p={{r:"1.5rem", l: "1rem"}} 
                shadow="3" 
                hoverShadow="4"
                >
                    Back
                </Button>
            </Col>
        </Row>
        
    );
}; export default BlogFooter