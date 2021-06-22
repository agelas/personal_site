import React from "react"
import {Row, Col, Button, Icon} from 'atomize';

function BlogNavBar() {
    return(
       
        <Row>
            <Col size = "2" d = "flex" h = "4vw" bg = "headerBG">
            {/*This col is literally just a spacer*/}
            </Col>

            <Col size = "10" d = "flex" h = "4vw" align = "center" bg = "headerBG">
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
                <Button
                    onClick = {(e) =>{
                        e.preventDefault();
                        window.location.href="/"
                    }}
                        prefix={
                        <Icon
                            name="HomeSolid"
                            size="20px"
                            color="white"
                            m={{r: "0.5rem"}}
                        />
                        }
                        bg="buttonBlue"
                        rounded="circle"
                        p={{r:"1.5rem", l: "1rem"}}
                        shadow="3"
                        hoverShadow="4"
                        m={{l: "1.5rem"}}
                    >
                        Home 
                    </Button>
            </Col>
        </Row>
        
    );
}; export default BlogNavBar